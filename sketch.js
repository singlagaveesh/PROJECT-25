const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1 , d1,d2,d3 , ground;


function setup() {

	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(50,370,50)

	ground = new Ground(600,390,1200,10)

	d1 = new Box(1000,375,150,20)
	d2 = new Box(930,335,10,100)
	d3 = new Box(1100,325,10,100)
  
}


function draw() {

  background(255);

  keyPressed();

  ball1.display()

  ground.display()

  d1.display()
  d2.display()
  d3.display()

 Engine.update(engine)
}

function keyPressed(){
	if( keyCode === UP_ARROW)
	{
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:-40});
	}
}



