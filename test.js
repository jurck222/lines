var canvas = document.getElementById("canv");
var ctx= canvas.getContext("2d");
ctx.moveTo(10, 150);
ctx.lineTo(500, 150);
ctx.stroke();
ctx.moveTo(11, 150);
ctx.lineTo(11, 165);
ctx.stroke();
ctx.moveTo(499, 150);
ctx.lineTo(499, 165);
ctx.stroke();
ctx.font = "10px Arial";
ctx.fillText("0:0", 4, 175);
ctx.font = "10px Arial";
ctx.fillText("1:0", 493, 175);
let table = 90;
let space = 490/90;
let position=0;
for(let i = 1; i<table;i++){
    position = space*i;
    ctx.moveTo(position+10, 150);
    ctx.lineTo(position+10, 160);
    ctx.stroke();
}