var w = d3.select('#plot').node().clientWidth,
    h = d3.select('#plot').node().clientHeight;

var canvas = d3.select('#plot')
    .append('canvas')
    .attr('width',w)
    .attr('height',h)
    .node(),
    ctx = canvas.getContext('2d');