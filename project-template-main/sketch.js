const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5, chain, chain2, chain3, chain4, chain5, roof

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  bob1 = new Pendulum(340, 450, "#00b0ff");
  bob2 = new Pendulum(400, 450, "#e91e63");
  bob3 = new Pendulum(460, 450, "#ffc107");
  bob4 = new Pendulum(520, 450, "#e91e63");
  bob5 = new Pendulum(580, 450, "#00b0ff");

  chain1 = new Sling(pendulum1.body, { x: 340, y: 200 });
  chain2 = new Sling(pendulum2.body, { x: 400, y: 200 });
  chain3 = new Sling(pendulum3.body, { x: 460, y: 200 });
  chain4 = new Sling(pendulum4.body, { x: 520, y: 200 });
  chain5 = new Sling(pendulum5.body, { x: 580, y: 200 });

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
  }
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

 