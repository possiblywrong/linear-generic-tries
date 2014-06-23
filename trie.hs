{-# LANGUAGE DeriveGeneric, StandaloneDeriving, RankNTypes,
             GADTs, KindSignatures, ScopedTypeVariables,
             DeriveFunctor, TypeSynonymInstances, FlexibleInstances,
             OverlappingInstances #-}

import qualified Data.IntMap as IntMap
import Data.Either (lefts,rights)
import Control.Monad
import Control.Arrow
import Data.Array
import Data.Bits
import Data.Char

data Order :: * -> * where
   NatO  :: Int -> Order Int
   TrivO :: Order ()
   SumL  :: Order t1 -> Order t2 -> Order (Either t1 t2)
   ProdL :: Order t1 -> Order t2 -> Order (t1, t2)
   MapO  :: (t1 -> t2) -> Order t2 -> Order t1
   ListL :: Order t -> Order [t]

ordUnit :: Order ()
ordUnit = TrivO

ordNat8 :: Order Int
ordNat8 = NatO 255

ordNat16 :: Order Int
ordNat16 = NatO 65535

ordInt32 :: Order Int
ordInt32 = MapO (splitW . (+ (-2147483648))) (ProdL ordNat16 ordNat16)

splitW :: Int -> (Int, Int)
splitW x = (shiftR x 16 .&. 65535, x .&. 65535)

ordChar8 :: Order Char
ordChar8 = MapO ord ordNat8

ordChar16 :: Order Char
ordChar16 = MapO ord ordNat16

fromList :: [t] -> Either () (t, [t])
fromList [] = Left ()
fromList (x : xs) = Right (x, xs)

listL :: Order t -> Order [t]
listL r = MapO fromList (SumL ordUnit (ProdL r (listL r)))

ordString8 :: Order String
ordString8 = listL ordChar8

ordString16 :: Order String
ordString16 = listL ordChar16

type TArray v = Array Int v

data Trie :: * -> * -> * where
   TEmpty :: Trie k v
   TUnit  :: v -> Trie () v
   TSum   :: Trie k1 v -> Trie k2 v -> Trie (Either k1 k2) v
   TProd  :: Trie k1 (Trie k2 v) -> Trie (k1,k2) v
   TMap   :: (k1 -> k2) -> (Trie k2 v -> Trie k1 v)
   TInt   :: TArray v -> Trie Int v

deriving instance Show v => Show (Trie k v)

instance Show (b -> a) where
    show _ = "<function>"

instance Show (TArray v) where
   show _ = "<base array>"

instance Functor (Trie k) where
   fmap f (TEmpty)     = TEmpty
   fmap f (TUnit v)    = TUnit (f v)
   fmap f (TSum t1 t2) = TSum (fmap f t1) (fmap f t2)
   fmap f (TProd t)    = TProd (fmap (fmap f) t)
   fmap f (TMap g t)   = TMap g (fmap f t)
   fmap f (TInt t)     = TInt (fmap f t)

curryl :: ((a,b),c) -> (a,(b,c))
curryl ((a,b),c) = (a,(b,c))

sumlefts :: [(Either a b,c)] -> [(a,c)]
sumlefts xs = [ (a,c) | (Left a, c) <- xs ]

sumrights :: [(Either a b,c)] -> [(b,c)]
sumrights xs = [ (b,c) | (Right b, c) <- xs ]

bdiscNat :: Int -> [(Int, v)] -> TArray [v]
bdiscNat (n :: Int) = accumArray (flip (:)) [] (0, n-1)

trie :: Order k -> forall v.[(k,v)] -> Trie k [v]
trie _ [ ]             = TEmpty
trie TrivO rel         = TUnit (map snd rel)
trie (SumL o1 o2) rel  = TSum (trie o1 (sumlefts rel)) (trie o2 (sumrights rel))
trie (ProdL o1 o2) rel = TProd (fmap (trie o2) (trie o1 (map curryl rel)))
trie (MapO g o) rel    = TMap g (trie o (map (g *** id) rel))
trie (NatO i) rel      = TInt (bdiscNat i rel)

tlookup :: Trie k v -> k -> Maybe v
tlookup TEmpty _              = Nothing
tlookup (TUnit v) ()          = Just v -- Only unit can lookup
tlookup (TSum t1 _) (Left a)  = tlookup t1 a
tlookup (TSum _ t2) (Right a) = tlookup t2 a
tlookup (TProd t1) (k1,k2)    = tlookup t1 k1 >>= (\t2 -> tlookup t2 k2)
tlookup (TMap g t1) k         = tlookup t1 $ g(k)
tlookup (TInt t1) k           = Just $ t1 ! k

main = do
   let t  = trie ordInt32 [(42,"bob"),(2,"baz"),(57,"kk"),(2,"jazz")]
   let t2 = trie ordString8 [("alpha","bob"),("alpha","baz"),("alpo","kk"),("blah","jazz")]
   print $ tlookup t 2
   print $ tlookup t 42
   print $ tlookup t 70000
   print $ tlookup t2 "alpha"
   print $ tlookup t2 "blah"
   print $ tlookup t2 "absent"
   --print $ flatten t2
   print t2
