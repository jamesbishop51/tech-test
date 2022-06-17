const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var width = document.getElementById('width')
var height = document.getElementById('height')

width.addEventListener("keyup", function(){
    width=this.value/3;
    draw();
}, false);

height.addEventListener("keyup", function(){
    height=this.value/3;
    draw();
}, false);


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(40,40,width,height);
}