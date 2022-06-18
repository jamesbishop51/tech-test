const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var width = document.getElementById('width')
var height = document.getElementById('height')
var btn = document.getElementById('btn')

windowheight = 168
windowwidth = 154

width.addEventListener("keyup", function(){
    width=this.value;    
}, false);

height.addEventListener("keyup", function(){
    height=this.value;   
}, false);
//min width => 750, max width => 900. min height => 1900, max height => 2100
btn.addEventListener('click', function handleClick(event)  {
    if((width >= 750 && width <= 900 )&&(height >= 1900 && height <= 2100)) {
        
        draw();
    }else if(width < 750 || width >900){
        alert("Please enter a width between 750 and 900mm");
        
    }
    
},false);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'white';    
    ctx.strokeRect(0,0,width,height);
    ctx.fillStyle = "blue";
    ctx.fillRect((width / 2) - (windowwidth / 2), (height / 2) - (windowheight / 2), windowwidth, windowheight);
}