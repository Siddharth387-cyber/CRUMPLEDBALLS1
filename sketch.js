
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper,dustbin;

function preload()
{
	createCanvas(800,400);
	rectMode(CENTER);

	engine=Engine.create();
	world=engine.world;
	Engine.run(engine);

	dustbin=new Dustbin(720,390,100,10);
	paper=new Paper(100,300,10);
	ground=Bodies.rectangle(width/2,400,width,10,{
		isStatic:true
	});
	World.add(world,ground);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  background(0);
  
  paper.display();
  dustbin.display();
  
  drawSprites();
 
}
function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:12,
			y:-13
		});
	}
}



