const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var base;
var box;
function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

   // base = new Ground(600,300,200,20);
box=new box(600,300,200,20);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   // base.display();

   box.display();
}

//function mouseDragged(){
   // Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
   // slingshot.fly();
//}
//function keyPressed(){
//if(keyCode===32){
//slingshot.attach(bird.body)


//}


//}