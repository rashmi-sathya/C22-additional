const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,object2,object3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    object = Bodies.rectangle(200,100,20, 20);
    object2=Bodies.circle(100,200,10);
    object3=  Bodies.circle(200,200,10)
    World.add(world,[object,object2,object3]);

    console.log(object);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   rect(object.position.x,object.position.y,40,40);
   circle(object2.position.x,object2.position.y,40);
   circle(object3.position.x,object3.position.y,40);

}