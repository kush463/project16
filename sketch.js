var monkey , monkey_running ;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(80,350,900,10);
  monkey.addAnimation("runing",monkey_running);
  monkey.scale = 0.1;
 
  ground = createSprite(400,382,900,10);
  ground.velovityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}

function draw() {
  
  background(500);
  
  monkey.collide(ground);
  
    if (World.frameCount % 80 == 0){
      
      banana = createSprite(410,230,20,20);
      banana.addImage("banana",bananaImage);
      banana.velocityX = -4;
      banana.scale = 0.1;
      banana.lifetime = 130;
      banana.y = Math.round(random(150,250));
      }
  
  
    if (World.frameCount % 300 == 0){
      
      obstacle = createSprite(400,360,20,20);
      obstacle.addImage("obstacle",obstacleImage);
      obstacle.velocityX = -4;
      obstacle.scale = 0.1;
      obstacle.lifetime = 130;

    }
  
   if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
     
    monkey.collide(ground);
  
    survivalTime = Math.round(frameCount/frameRate());
    
    stroke("black");
    textSize(20);
    fill("black");
    text("survivalTime : " + survivalTime,150,30);
  
  drawSprites();

}

