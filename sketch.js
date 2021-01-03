const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
  //createCanvas(800,400);

  ground = new Ground(460, 400, 500, 20)
  
}

function draw() {
  //background(255,255,255);  
  background("black")
  ground.display();
  drawSprites();
}