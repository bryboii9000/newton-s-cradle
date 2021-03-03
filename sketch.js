
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobOb1,bobOb2,bobOb3,bobOb4,bobOb5;
var roof;
var rope,rope1,rope2,rope3,rope4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    

  /// var Bobdiameter  = this.body.radius*2
   

	roof = new Flyoor(345,170,470,35);
 
  bobOb1 =  new Bob(580,463);
  bobOb2 =  new Bob(476,468);
  bobOb3 =  new Bob(358,470);
  bobOb4 =  new Bob(244,468);
  bobOb5 =  new Bob(100,457);
  
  rope = new Sline(bobOb1.body,roof.body,85*2,0);
  rope1 = new Sline(bobOb2.body,roof.body,45*2,0);
  rope2 = new Sline(bobOb3.body,roof.body,5*2,0);
  rope3 = new Sline(bobOb4.body,roof.body,-37*2,0);
  rope4 = new Sline(bobOb5.body,roof.body,-78*2,0);
  
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);


  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  roof.display();
  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();
 
 // keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 65){
    Matter.Body.applyForce(bobOb1.body, bobOb1.body.position, {x:85,y:-85 })
  }
};

