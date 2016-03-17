var w = d3.select('#plot').node().clientWidth,
    h = d3.select('#plot').node().clientHeight;

var canvas = d3.select('#plot')
    .append('canvas')
    .attr('width',w)
    .attr('height',h)
    .node(),
    ctx = canvas.getContext('2d');

var x = 0,
    speed = 2;

window.requestAnimationFrame(draw);

function draw(){
    ctx.clearRect(0,0,w,h);

    //Black ball goes back and forth
    ctx.beginPath();
    ctx.arc(x,100,20,0,2*Math.PI);
    ctx.fill();

    x+=speed;
    if(x<0 || x>w) speed = speed*-1;

    //Red ball spins around in a circle
    var time = new Date();

    ctx.save();

    ctx.beginPath();
    ctx.translate(w/2,h/2);
    ctx.rotate( 2*Math.PI/5*time.getSeconds() + 2*Math.PI/5000*time.getMilliseconds() );
    ctx.translate(h/2-50,0);
    ctx.arc(0,0,20,0,2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.restore();

    window.requestAnimationFrame(draw);
}