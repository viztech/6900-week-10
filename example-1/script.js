var w = d3.select('#plot').node().clientWidth,
    h = d3.select('#plot').node().clientHeight;

var canvas = d3.select('#plot')
    .append('canvas')
    .attr('width',w)
    .attr('height',h)
    .node(),
    ctx = canvas.getContext('2d');

//Two primitives: first is rectangle
//fillRect, strokeRect, clearRect
ctx.fillRect(0,0,100,100);
ctx.strokeRect(120,0,100,100);
ctx.clearRect(10,10,80,80);

//Second primitive is path
//begin path; draw command; close path; fill or stroke
//First path
ctx.beginPath();
ctx.strokeStyle = "#ff0000";
ctx.moveTo(0,150);
ctx.lineTo(100,150);
ctx.quadraticCurveTo(200,150,200,250);
ctx.stroke();

//Second path
ctx.beginPath();
ctx.fillStyle = "#00ff00";
ctx.lineWidth = 2;
ctx.arc(350,150,20,0,2*Math.PI);
ctx.fill();
ctx.stroke();

//Third path
var linearGradient = ctx.createLinearGradient(0,0,w,0);
linearGradient.addColorStop(0,'blue');
linearGradient.addColorStop(.5,'purple');
linearGradient.addColorStop(1,'red');
ctx.fillStyle = linearGradient;
ctx.fillRect(0,350,w,20);
