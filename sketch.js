var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,package;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	PackageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(PackageIMG)
	package.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

	 rect1=createSprite(300,615,20,90)
     rect1.shapeColor="red";
	 rect2=createSprite(400,650,190,20)
     rect2.shapeColor="red";
	 rect3=createSprite(500,615,20,90)
     rect3.shapeColor="red";
	 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites ();
  package.x= packageBody.position.x
  package.y= packageBody.position.y

}

function keyPressed() {
 if (keyCode = DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
	
  }
}



