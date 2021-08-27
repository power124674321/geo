const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
rubber=new Rubber (500,500,100)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
stone= new Stone (200,500)
  iron=new Iron (100,100)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
stone.display();
iron.display();
 
}