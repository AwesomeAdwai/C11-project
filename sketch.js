var ship, ship_running, edges;
var seaImage;
var sea;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(500,500);
 
  sea=createSprite(300,180,600,20)
  sea.addImage(seaImage);
  sea.x=sea.width/2;

  // creating trex
  ship = createSprite(250,300,20,50);
  ship.addAnimation("running", ship_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  ship.scale = 0.2;
  //ship.x = 50
  
}


function draw(){
  //set background color 
  background("white");
  sea.velocityX=-2

console.log(sea.y)

  if(sea.x<0){
    sea.x=sea.width/2;
  }
  //stop trex from falling down
  //ship.collide(sea)
  drawSprites();
}