
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

	//Create the Bodies Here.
   
   ball1=new Ball(320,400,20);
   ball2=new Ball(360,400,20);
   ball3=new Ball(400,400,20);
   ball4=new Ball(440,400,20);
   ball5=new Ball(480,400,20);
	sling1=new sling(ball1.body,{x:320,y:100})
	sling2=new sling(ball2.body,{x:360,y:100})
	sling3=new sling(ball3.body,{x:400,y:100})
	sling4=new sling(ball4.body,{x:440,y:100})
	sling5=new sling(ball5.body,{x:480,y:100})
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   sling1.display();
   sling2.display();
   sling3.display();
   sling4.display();
   sling5.display();

  drawSprites();
 
}
function keyPressed(){
    if(keyCode === 32){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50, y:-50});
      
    }
}


