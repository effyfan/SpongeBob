function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(250);
  
  
  // body
  fill(255,255,0);
  rect(100,80,200,220);
  
  // teeth
  fill(255);
  rect(178,205,18,25);
  rect(202,205,18,25);
  
  // mouth and nose
  fill(255,255,0);
  arc(200,140,150,150,TWO_PI+QUARTER_PI,PI-QUARTER_PI);
  arc(200,180,20,25,HALF_PI+QUARTER_PI,QUARTER_PI);
  
  //eyes
  fill(255);
  ellipse(165,150,70);
  ellipse(235,150,70);
  fill(0,200,255);
  ellipse(170,150,30);
  ellipse(230,150,30);
  fill(0);
  ellipse(170,150,15);
  ellipse(230,150,15);
  
  // pants
  fill(255);
  rect(100,260,200,20);
  fill(180,130,70);
  rect(100,280,200,20);
  fill(0);
  rect(110,285,30,6);
  rect(160,285,30,6);
  rect(210,285,30,6);
  rect(260,285,30,6);
  
  // face
  stroke(0);
  fill(150,220,150);
  ellipse(121,100,13,21);
  ellipse(115,130,10,10);
  ellipse(118,200,10,10);
  ellipse(125,230,13,25);
  ellipse(280,100,18,16);
  ellipse(282,210,15,25);
  ellipse(275,240,12,11);

  
}
