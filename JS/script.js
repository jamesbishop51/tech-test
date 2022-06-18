const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var width = document.getElementById('width')
var height = document.getElementById('height')
var btn = document.getElementById('btn')

windowheight = 168
windowwidth = 154

width.addEventListener("keyup", function () {
    width = this.value;
}, false);

height.addEventListener("keyup", function () {
    height = this.value;
}, false);

btn.addEventListener('click', function handleClick(event) {
    //checks for canvas support 
    if (canvas.getContext) {
        //checks if inputs are between the correct values
        if (width < 750 || width > 900) {
            alert("Please enter a width between 750 and 900mm");
            document.getElementById('width').value = '';
        }
        else if (height < 1900 || height > 2100) {
            alert("Please enter a heigth between 1900 and 2100mm");
            document.getElementById('height').value = '';
        }
        else {
            draw();
        }
    } else {
        alert("this appliaction uses canvas which isnt supported by your cuirrent browers")
    }
})
function draw() {
    //draws the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.strokeRect(0, 0, width, height);
    ctx.fillStyle = "blue";
    ctx.fillRect((width / 2) - (windowwidth / 2), (height / 2) - (windowheight / 2), windowwidth, windowheight);
}