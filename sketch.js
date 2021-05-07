var cat,mouse,catImg,mouseImg,catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;
var canvas;

function preload () {
  bg = loadImage("garden.png");
  catImg1 = loadImage("cat1.png");
  catImg2 = loadAnimation("cat2.png","cat3.png");
  catImg3 = loadImage("cat4.png");
  mouseImg1 = loadImage("mouse1.png");
  mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
  mouseImg3 = loadImage("mouse4.png");
}

function setup (){
  canvas = createCanvas(1000,800);
  cat = createSprite(870,600);
 cat.addAnimation("catSleeping",catImg1)
 cat.scale = 0.2
  mouse = createSprite(200,600);
  mouse.addAnimation("mouseStanding",mouseImg1);
  mouse.scale = 0.2;
}

function draw (){
  background(bg);
  if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImage",catImg3);
    cat.x = 300;
    cat.scale = 0.2;
    mouse.addAnimation("mouseLastImage",mouseImg3);
    mouse.scale = 0.15;
  }

  drawSprites();
 }

function keyPressed(){
  if(keyCode === LEFT_ARROW ){
    cat.velocityX =-5;
  cat.addAnimation("catRunning",catImg2);
  mouse.addAnimation("mouseteasing",mouseImg2);
  

  
  }

}


