var rua, ruaImg
var corredor, corredorImg
var paredeInv1, paredeInv2
function preload(){
  ruaImg = loadImage("path.png");

  corredorImg = loadAnimation("Runner-1.png", "Runner-2.png", "Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  rua = createSprite(200, 200, 400, 400);
  rua.addImage(ruaImg);
  rua.velocityY = 10;
  
  paredeInv1 = createSprite(50, 200, 10, 400);
  paredeInv1.visible = false;
  paredeInv2 = createSprite(350, 200, 10, 400);
  paredeInv2.visible = false;

  corredor = createSprite(200, 300, 10, 10);
  corredor.addAnimation("corredorCorendo",corredorImg);
  corredor.scale = 0.1;
}

function draw() {
  background(0);

  corredor.velocityX = 0;

  if(rua.y>400){
    rua.y = height/2;
  }

  if (keyIsDown(39)){
    corredor.velocityX = 5;
  }
  if (keyIsDown(37)){
    corredor.velocityX = -5;
  }
  corredor.collide(paredeInv1);
  corredor.collide(paredeInv2);

  drawSprites();
}
