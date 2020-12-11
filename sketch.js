
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var base1,base2;
var block1;

function setup (){

var canvas = createCanvas(1300,600)

    engine = Engine.create();
    world = engine.world;


base1 = new Base(650,500,300,20);
base2 = new Base(1100,300,300,20);

block1 = new Block(100,500,50,80);

}


function draw(){

    Engine.update(engine);
    background(0)


base1.display();
base2.display();

block1.display();

}




