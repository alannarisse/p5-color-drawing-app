//p5.js documentation https://p5js.org/reference/
//initializing some variable with values.
let myBrush = 20
let eraser = false;
let opacity = 60;
let framerate = 30;
let fillValue = 0;
let colorPicker;


//this runs once when the page is loaded or the play button is pressed
function setup() {
    alphaSlider = createSlider(0, 255, 128);
    colorPicker = createColorPicker('red');
	createCanvas(windowWidth, windowHeight);
	background(255);
    frameRate(framerate);
    colorPicker.position(60, 20);
    alphaSlider.position(20, 50);
}

//this happens continuously at a given frame rate. the default is 30fps (frames per second)
function draw() {
    noStroke()
     let alphaValue = alphaSlider.value();
      let myColor = colorPicker.color();
  
  // Set the alpha value of the color
  myColor.setAlpha(alphaValue);
    // if the mouse is pressed, draw on the screen
    if(mouseIsPressed){
        fill(myColor)
    //if not pressed, don't draw anything.
    } else {
        noFill()
    }
    if(eraser == true){
        erase()
      } else {
        noErase()
      }
	circle(mouseX, mouseY, myBrush);
}

function clearScreen () {
    background(255);
}

function listen() {
document.getElementById("bigger").addEventListener("click", makeBigger);
document.getElementById("smaller").addEventListener("click", makeSmaller);
document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("eraser").addEventListener("click", eraserTool);
document.getElementById("brush").addEventListener("click", brushTool);
document.getElementById("lessOpaque").addEventListener("click", lessOpaque);
document.getElementById("moreOpaque").addEventListener("click", moreOpaque);
}


function makeBigger() {
    if(myBrush <= 100){
        myBrush = myBrush + 5
    } else {
        myBrush = 100;
        alert("you've reached the max brush size!")
    }
    document.getElementById("brushSize").innerHTML=myBrush;
}
function makeSmaller() {
    if(myBrush > 0){
          myBrush = myBrush - 5
        } else {
          myBrush = 1
          alert("brush can't be smaller than 0.")
        }
    document.getElementById("brushSize").innerHTML=myBrush;
}

function eraserTool() {
    eraser = true;
    const brush = document.getElementById("brush");
    brush.classList.remove("hide");
    const erase = document.getElementById("eraser");
    erase.classList.add("hide");
    document.getElementById("toolLabel").innerHTML="Eraser size:";
}
function brushTool() {
    eraser = false;
    const brush = document.getElementById("brush");
    brush.classList.add("hide");
    const erase = document.getElementById("eraser");
    erase.classList.remove("hide");
    document.getElementById("toolLabel").innerHTML="Brush size:";
}

function lessOpaque() {
    if(opacity > 0){
          opacity=opacity - 10;
        } else {
          opacity = 1
          alert("opacity can't be smaller than 0.")
        }
    document.getElementById("opacitySetting").innerHTML=opacity;
    return opacity;
}

function moreOpaque() {
    if(opacity < 255){
          opacity=opacity + 10;
        } else {
          opacity = 255
          alert("opacity can't be bigger than 255.")
        }
    document.getElementById("opacitySetting").innerHTML=opacity;
    return opacity;
}

listen();