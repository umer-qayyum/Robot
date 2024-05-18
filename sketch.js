function setup(){
    createCanvas(1024,1024);
}
function draw(){
    background('orange');
   
    //left ear
    fill(230,92,0);
    ellipse(250, 300,80,100);
    //right ear
    fill(230,92,0);
    ellipse(550, 300, 80,100);
       
    //face
    fill(120,150,103);
    square(250,200,300,5);
    
    //nose
    fill(56,78,170)
    triangle(370,380,398,300,425,380);
    
    //left eye
    ellipseMode(RADIUS);
    fill('black');
    ellipse(330, 280, 20, 20);
    ellipseMode(CENTER);
    fill(150,130,140);
    ellipse(330, 280, 30,30);
    
    //right eye
    ellipseMode(RADIUS);
    fill('black');
    ellipse(465, 280, 20, 20);
    ellipseMode(CENTER);
    fill(150,130,140);
    ellipse(465, 280, 30,30);
    2
    //mouth
      fill(255,51,51);
    arc(400, 420, 100,40,0,PI);
}


