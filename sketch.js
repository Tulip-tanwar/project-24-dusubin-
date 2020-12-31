
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ingine,world;
var bustbin,wastePaper;

function preload()
{
	var option{
	isStastic:false,
	restitution:0.3,
	friction:0.5,
	dencity:1.2

	}
 	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1.new dustbin1(240,100,50,100);
	paper1.new wastepaper1(10,50,100,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  engine.update;
  
  dustbin1.display
 wastePaper1.display
  drawSprites();
 
}



