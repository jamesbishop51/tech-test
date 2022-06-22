var canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


var doorWidth = document.getElementById('doorWidth')
var doorHeight = document.getElementById('doorHeight')
var windowHeight = document.getElementById('windowHeight')
var windowWidth = document.getElementById('windowWidth')
var selectedColour = document.getElementById('colourSelection')
var doorBtn = document.getElementById('btn')
var windowX = document.getElementById('windowXaxis')
var windowY = document.getElementById('windowYaxis')

doorWidth.addEventListener("keyup", function () {
    doorWidth = this.value;    
}, false);
doorHeight.addEventListener("keyup", function () {
    doorHeight = this.value; 
}, false);
windowWidth.addEventListener("keyup", function () {
    windowWidth = this.value;
}, false);
windowHeight.addEventListener("keyup", function () {
    windowHeight = this.value;
}, false);
windowX.addEventListener("change", draw, true)
windowY.addEventListener("change", draw, true)

btn.addEventListener('click', function handleClick(event) {    
        //checks if inputs are between the correct values
        if (doorWidth < 750 || doorWidth > 900) {
            alert("Please enter a width between 750 and 900mm");
            document.getElementById('doorWidth').value = '';
        }
        else if (doorHeight < 1900 || doorHeight > 2100) {
            alert("Please enter a heigth between 1900 and 2100mm");
            document.getElementById('doorHeight').value = '';
        }
        else {
            draw();
        }   
    })

function draw() {
    //draws the canvas
    windowX.setAttribute("max",doorWidth - windowWidth)
    windowY.setAttribute("max",doorHeight - windowHeight)
    var option = selectedColour.options[selectedColour.selectedIndex];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvas').width=doorWidth;
    document.getElementById('canvas').height=doorHeight;
    ctx.fillStyle = option.value;   
    ctx.fillRect(0, 0, doorWidth, doorHeight);
    ctx.fillStyle = "blue";
    ctx.fillRect(windowX.value, windowY.value, windowWidth, windowHeight);
    console.log(windowX.value)
    console.log(windowY.value)
}