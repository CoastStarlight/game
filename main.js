var c = document.getElementById("game");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
var ctx = c.getContext("2d");

//function to draw circles
function drawCircle(x,y){

    //randomly chose color and size for circles
    var randC = color[Math.floor(Math.random() * color.length)];
    var randS = Math.floor(Math.random() * (80 - 30)) + 30;

    //draw circles
    ctx.beginPath();
    ctx.arc(x,y,randS,0,2*Math.PI);

    //make gradient for random color and fill
    var grd=ctx.createLinearGradient(0,0,170,0);
    grd.addColorStop(0,randC);
    grd.addColorStop(1,"transparent");

    ctx.fillStyle=grd;
    ctx.fill();
    ctx.closePath();
}
drawCircle(100,100)
