
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,grd,p1;
 var myengine,myworld;
 var dbinimg;
function preload()
{
	dbinimg=loadImage("dbin.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
  box1=new Box(width/2+70,height-90,20,100);
	box2=new Box(width/2+250,height-90,20,100);
	box3=new Box(width/2+160,height-40,200,15);
	grd=new Ground(width/2,height-30,width,10);
  p1=new Paper(130,20,50);
  
  

	Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  image(dbinimg,width/2+80,height-130,160,90);
  p1.display();
  box1.display();
  box2.display();
  box3.display();
  grd.display();

  drawSprites();
 
}

function keyPressed(){

   if (keyCode===UP_ARROW){
     Body.applyForce(p1.body,p1.body.position,{x:60,y:-60});
   }
}

