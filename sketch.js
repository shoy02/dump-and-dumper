
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
    var ground,rect1,rect2,rect3;
  ground=createSprite(200,700,1500,30);
  ground.shapeColor=color(0,255,255);
  rect1=createSprite(600,680,150,10);
  rect1.shapeColor=color(255,0,0);
  rect2=createSprite(520,635,10,100);
  rect2.shapeColor=color(255,0,0);
  rect3=createSprite(680,635,10,100);
  rect3.shapeColor=color(255,0,0);
  background(0);
  drawSprites();
}



