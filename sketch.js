
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var vlog1;
var dustbin1 , dustbin2 , dustbin3;
var paper1;

function setup() {
	createCanvas(700, 690);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(500 , 600 , 10 , 99);

	dustbin2 = new Dustbin(600 , 600 , 10 , 99);

	dustbin3 = new Dustbin(550 , 640 , 99 , 10);


	paper1 = new paper(100 , 600 , 10 , 10);

	photo = createSprites(600 , 600 , 10 , 10);

	vlog1 = new Ground(400 , 650 , 1000 , 10);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);


 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 vlog1.display();


}


function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.postion,{x:85,y:-85});
	}
	
}
