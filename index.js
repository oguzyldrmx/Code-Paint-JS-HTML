const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const drawColor = document.querySelector('#color');
const lineWidthInput = document.querySelector('lineWidth');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let position = {
    x : 0,
    y : 0,
}
//Start draw
document.addEventListener("mousedown",(e) =>{
    document.addEventListener("mousemove", draw);
    reposition(e);
} ) 

//Stop draw
let color = "black";
let lineWidth = 5;

function reposition(e) {
    position.x = e.clientX - canvas.offsetLeft;
    position.y = e.clientY - canvas.offsetTop;
}
function draw(e){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(position.x,position.y);
    reposition(e);
    ctx.lineTo(position.x,position.y);
    ctx.stroke();
    ctx.closePath();
}