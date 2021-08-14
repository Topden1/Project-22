const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var bob2;
var rope;
var rope2;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);


	var rope3,rope4, rope5;
	var bob3, bob4, bob5;
	

   constructor(body1,body2, pointA, pointB)
   {

	this.pointA=pointA
	this.pointB=pointB

      
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}
	}

   }

   rope = Matter.Constraint.create({
	   pointA:{x:200,y:20},
	   bodyB:rope,
	   pointB:{x:0,y:0},
	   length:100,
	   stiffness:0.1
   });

   World.add(world,rope);

   rope2 = Matter.Constraint.create({
	   bodyA:rope,
	   pointA:{x:0,y:0},
		bodyB:rope2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
   });


    World.add(world,rope2);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  rope1=new rope(bob1, roof, -80,0);

  //call display() to show ropes here

  display()
  {

  var pointA=this.rope.bodyA.position;
  var pointB=this.rope.bodyB.position;
  
  strokeWeight(2);
 line(roof.pointA.x,roof.positionA.y,bob.position.x,bob.position.y);
 line(bob.position.x,bob.position.y, bob2.position.x,ball2.position.y);
 pop();

  }



  
  //create ellipse shape for multiple bobs here
ellipse(bob.position.x,ball.position.y,10);
ellipse(bob2.position.x,ball2.positio.y,12);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.


function keyPressed()
{

  if(keyCode == UP_ARROW)
  {
    Matter.Body,applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }

}


//Can you help me? I have tried many ways to make this project work but it just does'nt work. What should I do???