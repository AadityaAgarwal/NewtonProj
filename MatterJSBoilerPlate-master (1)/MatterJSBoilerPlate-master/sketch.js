
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rchain, lchain,chain1,chain2,chain3;
var roof;
var lbob,rbob,bob1,bob2,bob3;
var Rrect, Lrect, rect1,rec2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  

  //Create the Bodies Here.
  
  
  Lrect= Bodies.rectangle(250,50,10,10);
  Lrect= World.add(world,Lrect);

  Rrect= Bodies.rectangle(410,50,10,10);
  Rrect= World.add(world,Rrect);

  rect1= Bodies.rectangle(290,50,10,10);
  rect1= World.add(world,rect1);

  rect2= Bodies.rectangle(330,50,10,10);
  rect2= World.add(world,rect2);

  rect3= Bodies.rectangle(370,50,10,10);
  rect3= World.add(world,rect3);

	roof= Bodies.rectangle(350,50,200,20);
	World.add(world,roof);

	var pos= roof.position;

  var opt= {isStatic: true}




	lbob= new Bob(250);
	rbob= new Bob(410);
	bob1= new Bob(290);
	bob2= new Bob(330);
  bob3= new Bob(370);

  
  rchain= new Chain(rbob.body,{x: 410, y: 50});
  //chian1= new Chain(bob1.body,{x: 290,y: 50});
  //chian2= new Chain(bob2.body,{x: 330,y: 50});
  //chian3= new Chain(bob3.body,{x: 370,y: 50});

  var options = {
    bodyA: lbob.body,
    bodyB: Lrect.body,
    stiffness: 0.4,
    length: 10
}

  // Lchain= Constraint.create(options);
   //World.add(world,Lchian);

  Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255);

  Engine.update(engine);
  
  rect(250,50,10,10);
  rect(410,50,10,10);
  rect(290,50,10,10);
  rect(370,50,10,10);
  rect(330,50,10,10);
  rect(350,50,10,10);

  rect(350,50,250,20);
 
 // line(lbob.position.x, lbob.position.y,Lrect.position.x,Lrect.position.y);

  lbob.display();
  rbob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  
  rchain.display();
  //chain1.display();
  //chain2.display();
  //chain3.display();
  
  drawSprites();
 
}
function keyPressed(){

  if (keyCode=== UP_ARROW){
    Body.setStatic(lbob,false);
    Body.applyForce(lbob.body,lbob.body.position,{x:-85,y: 85});
  }
}



