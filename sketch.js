
var bg,bgImg;
var eraserImg,eraser;


function preload(){
    bgImg = loadImage("bg.jpg");
    eraserImg = loadImage("eraser.png");
    
}

function setup() {
  createCanvas(1200,800);
  bg = createSprite(600,400,1200,800);
  bg.addImage("bg.jpg",bgImg);
  bg.scale = 1.0;

}
function draw() {
  background(0);  
  
  drawSprites();
}