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

windowX.addEventListener("change", draw, true)
windowY.addEventListener("change", draw, true)
btn.addEventListener("click", draw, true)


function draw() {
    if (doorWidth.value < 750 || doorWidth.value > 900) {
        alert("Please enter a width between 750 and 900mm");
        document.getElementById('doorWidth').value = '';
    }
    else if (doorHeight.value < 1900 || doorHeight.value > 2100) {
        alert("Please enter a heigth between 1900 and 2100mm");
        document.getElementById('doorHeight').value = '';
    }
    else if (parseInt(windowWidth.value) >= parseInt(doorWidth.value) ) {
        alert("Window Width is bigger than door Width please re-enter");
        document.getElementById('windowWidth').value = '';
    }
    else if (parseInt(windowHeight.value) >= parseInt(doorHeight.value0) ) {
        alert("Window Height is bigger than door Height please re-enter");
        console.log("window" + windowHeight.value)
        console.log("door" + doorHeight.value)
        document.getElementById('windowHeight').value = '';
    }
    else {
        //draws the canvas
        windowX.setAttribute("max", doorWidth.value - windowWidth.value)
        windowY.setAttribute("max", doorHeight.value - windowHeight.value)
        var option = selectedColour.options[selectedColour.selectedIndex];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = doorWidth.value;
        canvas.height = doorHeight.value;
        ctx.fillStyle = option.value;
        ctx.fillRect(0, 0, doorWidth.value, doorHeight.value);
        ctx.fillStyle = "purple";
        ctx.fillRect(windowX.value, windowY.value, windowWidth.value, windowHeight.value);
    }

}