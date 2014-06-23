var data = {
"rules":[
],

"times":[
[ { id: 0, nodeName: "\"AA\"", nval: "AA", nodeValue: 10, incoming: [] },
  { id: 1, nodeName: "\"BCA\"", nval: "BCA", nodeValue: 10, incoming: [] },
  { id: 2, nodeName: "\"BA\"", nval: "BA", nodeValue: 10, incoming: [] },
  { id: 3, nodeName: "\"BB\"", nval: "BB", nodeValue: 10, incoming: [] },
  { id: 4, nodeName: "\"AAC\"", nval: "AAC", nodeValue: 10, incoming: [] },
  { id: 5, nodeName: "\"AB\"", nval: "AB", nodeValue: 10, incoming: [] } ],

// 1 - ZIP
[ { id:  6, nodeName: "(\"AA\", \"AA\")", nval: "AA", nodeValue: 10, incoming: [] },
  { id:  7, nodeName: "(\"BCA\", \"BCA\")", nval: "BCA", nodeValue: 10, incoming: [] },
  { id:  8, nodeName: "(\"BA\", \"BA\")", nval: "BA", nodeValue: 10, incoming: [] },
  { id:  9, nodeName: "(\"BB\", \"BB\")", nval: "BB", nodeValue: 10, incoming: [] },
  { id: 10, nodeName: "(\"AAC\", \"AAC\")", nval: "AAC", nodeValue: 10, incoming: [] },
  { id: 11, nodeName: "(\"AB\", \"AB\")", nval: "AB", nodeValue: 10, incoming: [] } ],

// 2 - listL ordChar8 => Map0 & Sum
[ { id: 12, nodeName: "R ('A',['A'])", nval: "AA", nodeValue: 10, incoming: [] },
  { id: 13, nodeName: "R ('B',['C','A'])", nval: "BCA", nodeValue: 10, incoming: [] },
  { id: 14, nodeName: "R ('B',['A'])", nval: "BA", nodeValue: 10, incoming: [] },
  { id: 15, nodeName: "R ('B',['B'])", nval: "BB", nodeValue: 10, incoming: [] },
  { id: 16, nodeName: "R ('A',['A','C'])", nval: "AAC", nodeValue: 10, incoming: [] },
  { id: 17, nodeName: "R ('A',['B'])", nval: "AB", nodeValue: 10, incoming: [] } ],

// 3 - listL ordChar8 => ProdL
[ { id: 18, nodeName: "('A',['A'])", nval: "AA", nodeValue: 10, incoming: [] },
  { id: 19, nodeName: "('B',['C','A'])", nval: "BCA", nodeValue: 10, incoming: [] },
  { id: 20, nodeName: "('B',['A'])", nval: "BA", nodeValue: 10, incoming: [] },
  { id: 21, nodeName: "('B',['B'])", nval: "BB", nodeValue: 10, incoming: [] },
  { id: 22, nodeName: "('A',['A','C'])", nval: "AAC", nodeValue: 10, incoming: [] },
  { id: 23, nodeName: "('A',['B'])", nval: "AB", nodeValue: 10, incoming: [] } ],

// 4 - listL ordChar8 => ordChar8
[ { id: 24, nodeName: "(65,['A'])", nval: "AA", nodeValue: 10, incoming: [] },
  { id: 25, nodeName: "(66,['C','A'])", nval: "BCA", nodeValue: 10, incoming: [] },
  { id: 26, nodeName: "(66,['A'])", nval: "BA", nodeValue: 10, incoming: [] },
  { id: 27, nodeName: "(66,['B'])", nval: "BB", nodeValue: 10, incoming: [] },
  { id: 28, nodeName: "(65,['A','C'])", nval: "AAC", nodeValue: 10, incoming: [] },
  { id: 29, nodeName: "(65,['B'])", nval: "AB", nodeValue: 10, incoming: [] } ],

// 5 - listL ordChar8 => Nat0 255
[ { id: 30, nodeName: "['A']", nval: "AA", nodeValue: 10, incoming: [] },
  { id: 31, nodeName: "['A','C']", nval: "AAC", nodeValue: 10, incoming: [] },
  { id: 32, nodeName: "['B']", nval: "AB", nodeValue: 10, incoming: [] },
  { id: 33, nodeName: "['C','A']", nval: "BCA", nodeValue: 10, incoming: [] },
  { id: 34, nodeName: "['A']", nval: "BA", nodeValue: 10, incoming: [] },
  { id: 35, nodeName: "['B']", nval: "BB", nodeValue: 10, incoming: [] } ]

//[ { id: 12, nodeName: "AA", nodeValue: 10, incoming: [] },
//  { id: 13, nodeName: "AAC", nodeValue: 10, incoming: [] },
//  { id: 14, nodeName: "AB", nodeValue: 10, incoming: [] },
//  { id: 15, nodeName: "BCA", nodeValue: 10, incoming: [] },
//  { id: 16, nodeName: "BA", nodeValue: 10, incoming: [] },
//  { id: 17, nodeName: "BB", nodeValue: 10, incoming: [] } ]
],
"links":[
// 0 - ZIP
{"source":0,"target":6,"value":10},
{"source":1,"target":7,"value":10},
{"source":2,"target":8,"value":10},
{"source":3,"target":9,"value":10},
{"source":4,"target":10,"value":10},
{"source":5,"target":11,"value":10},

// 1 - listL
{"source":6,"target":12,"value":10},
{"source":7,"target":13,"value":10},
{"source":8,"target":14,"value":10},
{"source":9,"target":15,"value":10},
{"source":10,"target":16,"value":10},
{"source":11,"target":17,"value":10},

// 1 - listL
{"source":12,"target":18,"value":10},
{"source":13,"target":19,"value":10},
{"source":14,"target":20,"value":10},
{"source":15,"target":21,"value":10},
{"source":16,"target":22,"value":10},
{"source":17,"target":23,"value":10},

// 1 - listL
{"source":18,"target":24,"value":10},
{"source":19,"target":25,"value":10},
{"source":20,"target":26,"value":10},
{"source":21,"target":27,"value":10},
{"source":22,"target":28,"value":10},
{"source":23,"target":29,"value":10},

// 1 - listL
{"source":24,"target":30,"value":10},
{"source":25,"target":33,"value":10},
{"source":26,"target":34,"value":10},
{"source":27,"target":35,"value":10},
{"source":28,"target":31,"value":10},
{"source":29,"target":32,"value":10}

//// 2 - listL ordChar8
//{"source":6,"target":12,"value":10},
//{"source":7,"target":15,"value":10},
//{"source":8,"target":16,"value":10},
//{"source":9,"target":17,"value":10},
//{"source":10,"target":13,"value":10},
//{"source":11,"target":14,"value":10}
]};

console.log(data);
/* Process Data */
    
// make a node lookup map
var nodeMap = (function() {
    var nm = {};
    data.times.forEach(function(nodes) {
        nodes.forEach(function(n) {
            nm[n.id] = n;
            // add links and assure node value
            n.links = [];
            n.incoming = [];
            n.nodeValue = n.nodeValue || 0;
        })
    });
    return nm;
})();

// attach links to nodes
data.links.forEach(function(link) {
    nodeMap[link.source].links.push(link);
    nodeMap[link.target].incoming.push(link);
});
    
// sort by value and calculate offsets
data.times.forEach(function(nodes) {
    var cumValue = 0;
    nodes.forEach(function(n, i) {
        n.order = i;
        n.offsetValue = cumValue;
        cumValue += n.nodeValue;
        // same for links
        var lCumValue;
        // outgoing
        if (n.links) {
            lCumValue = 0;
            n.links.sort(function(a,b) {
                return d3.descending(a.value, b.value)
            });
            n.links.forEach(function(l) {
                l.outOffset = lCumValue;
                lCumValue += l.value;
            });
        }
        // incoming
        if (n.incoming) {
            lCumValue = 0;
            n.incoming.sort(function(a,b) {
                return d3.descending(a.value, b.value)
            });
            n.incoming.forEach(function(l) {
                l.inOffset = lCumValue;
                lCumValue += l.value;
            });
        }
    })
});
data = data.times;

// calculate maxes
var maxn = d3.max(data, function(t) { return t.length }),
    maxv = d3.max(data, function(t) { return d3.sum(t, function(n) { return n.nodeValue }) });

/* Make Vis */
    
// settings and scales
var w = 1000,
    h = 500,
    gapratio = .7,
    delay = 1500,
//    delay = 200,
    padding = 60,
    color = d3.scale.category20()
    x = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeBands([0, w + (w/(data.length-1))], gapratio),
    y = d3.scale.linear()
        .domain([0, maxv])
        .range([0, h - padding * maxn]),
    first_link = true,
    line = d3.svg.line().interpolate('basis');

// root
var vis = d3.select("#anim")
  .insert("svg:svg",":first-child")
    .attr("width", w)
    .attr("height", h);


var t = 0;
function update(first) {
    // update data
    var currentData = data.slice(0, ++t);

    // time slots
    var times = vis.selectAll('g.time')
        .data(currentData)
      .enter().append('svg:g')
        .attr('class', 'time')
        .attr("transform", function(d, i) { return "translate(" + (x(i) - x(0) + 2) + ",12)" });

    // node bars
    var nodes = times.selectAll('g.node')
        .data(function(d) { return d })
      .enter().append('svg:g')
        .attr('class', 'node');

     nodes.append('svg:rect')
         .attr("fill", function(d) { return d.color = color(d.nval.replace(/ .*/, "")); })
         .attr("stroke", function(d) { return d3.rgb(d.color).darker(2); })
         .attr('y', function(n, i) {
             return y(n.offsetValue) + i * padding;
         })
         .attr('width', first ? x.rangeBand() : 0 )
         .attr('height', function(n) { return y(n.nodeValue) })
         .transition()
            .delay(first ? 0 : delay)
            .duration(delay)
            .attr('width', x.rangeBand());
     nodes.append("text")
         .attr("x", 3)
         .attr('y', function(n, i) {
             return y(n.offsetValue) + i * padding + 43;
         })
         .style("opacity",0)
         .attr("dy", ".35em")
         .attr("text-anchor", "start")
         .attr("transform", null)
         .attr("font-size", '1em')
         .attr("font-family", 'Source Code Pro')
         .text(function(d) { return d.nodeName; })
         .transition()
            .delay(first ? 0 : 1.5*delay)
            .duration(delay)
            .style('opacity', 100);

    var linkLine = function(start) {
        return function(l) {
            var source = nodeMap[l.source],
                target = nodeMap[l.target],
                gapWidth = x(0),
                bandWidth = x.rangeBand() + gapWidth,
                startx = x.rangeBand() - bandWidth,
                sourcey = y(source.offsetValue) + 
                    source.order * padding +
                    y(l.outOffset) +
                    y(l.value)/2,
                targety = y(target.offsetValue) + 
                    target.order * padding + 
                    y(l.inOffset) +
                    y(l.value)/2,
                points = start ? 
                    [
                        [ startx, sourcey ], [ startx, sourcey ], [ startx, sourcey ], [ startx, sourcey ]
                    ] :
                    [
                        [ startx, sourcey ],
                        [ startx + gapWidth/2, sourcey ],
                        [ startx + gapWidth/2, targety ],
                        [ 0, targety ]
                    ];
            return line(points);
        }
    }

    // links
    var links = nodes.selectAll('path.link')
        .data(function(n) { return n.incoming || [] })
      .enter().append('svg:path')
        .attr('class', 'link')
        .style('stroke-width', function(l) { return y(l.value) })
        .attr('d', linkLine(true))
        .on('mouseover', function() {
            d3.select(this).attr('class', 'link on')
        })
        .on('mouseout', function() {
            d3.select(this).attr('class', 'link')
        })
      .transition()
        .duration(delay)
        .attr('d', linkLine());
      if(!first & first_link){ first_link = false; }
}

function updateNext() {
   console.log("UpdateNext()");
    if (t < data.length) {
        update(false);
//        window.setTimeout(updateNext, 2*delay)
    } else {
       // Draw boxing
      vis.insert('svg:g',":first-child")
        .attr('class', 'boxing')
        .append('svg:rect')
        .attr("fill", "grey")
        .attr('y', 0)
        .attr('x', 870)
        .attr('opacity',0.4)
        .attr('width', 130)
        .attr('height', 240);

    vis.select('g.boxing')
        .append('svg:rect')
        .attr("fill", "grey")
        .attr('y', 245)
        .attr('x', 870)
        .attr('opacity',0.4)
        .attr('width', 130)
        .attr('height', 240);
    }
}
update(true);
//updateNext();
