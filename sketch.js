
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var trea

var person

var crate_left
var crate_bottom
var crate_right

var mango1
var mango2
var mango3
var mango4
var mango5

var twig1
var twig2
var twig3
var twig4
var twig5 
var twig6

var stone 

var boy

var floor, fune

function preload()
{
	boy = loadImage("boy.png")

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	 floor = createSprite(500, 690, 1000, 20)
	 
	 mango1 = new mango (664, 244, 40);
	 mango2 = new mango (530, 300, 40);
	 mango3 = new mango (600, 369, 40);
	 mango4 = new mango (760, 315, 40);
	 mango5 = new mango (860, 370, 40);
	 
	//  twig1 = new twig (mango1.body, {x:664, y:244});
	//  twig2 = new twig (mango2.body, {x:530, y:300});
	//  twig3 = new twig (mango3.body, {x:600, y:369});
	//  twig4 = new twig (mango4.body, {x:760, y:315});
	//  twig5 = new twig (mango5.body, {x:860, y:370});

	 trea = new tree (700, 400, 400, 500);

	 stone = new Stone (110, 390, 30);

     twig6 = new twig (stone.body, {x: 110, y: 390})
   
	 //boy = new Boy (300, 300, 60);

	 // crate_left = new crate (130, 12);
	 //  crate_bottom = new crate ();
	 //  crate_right = new crate ();

	 Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");

  image(boy, 95, 340, 200, 300);

  trea.display()
  
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()

//   twig1.display()
//   twig2.display()
//   twig3.display()
//   twig4.display()
//   twig5.display()

stone.display()

twig6.display()

//boy.display()

//crate_left.display()
// crate_bottom.display()
// crate_right.display()

detectCollision(stone, mango1)
detectCollision(stone, mango2)
detectCollision(stone, mango3)
detectCollision(stone, mango4)
detectCollision(stone, mango5)

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   twig6.fly();
}				
function detectCollision(stone1, mango1)
{
	var mangoPos = mango1.body.position;
	var stonePos = stone1.body.position;
	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)

	console.log(distance)
	
	if(distance < mango1.radius + stone1.radius){
		Matter.Body.setStatic(mango1.body, false)
	}
}
function keyPressed (){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 110, y: 390 })
		twig6.attach(stone.body);

	}
}
