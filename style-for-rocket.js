// Variables
let x = 200;
let y = 200;
let s = 1.0;

// The body of the rocket
push();
noStroke();
fill(251, 144, 98);
rect(x, y, 100, 150, 20);

fill(255, 254, 242);
rect(x, y, 100, 100);

fill(251, 144, 98);
arc(x + 50, y, 100, 170, PI, 2 * PI);
rect(x + 20, y + 150, 60, 10);

beginShape();
fill(0, 210, 255);
vertex(x + 100, y + 25);
bezierVertex(x + 130, y + 60, x + 160, y + 90, x + 100, y + 90);
endShape();

beginShape();
vertex(x, y + 25);
bezierVertex(x - 30, y + 60, x - 60, y + 90, x, y + 90);
endShape();
pop();

// Window
push();
strokeWeight(3);
stroke(160);
fill(0, 210, 255);
ellipse(x + 50, y + 50, 70);

// Details
function bolts(x, y) {
  fill(160);
  ellipse(x, y, 8);
}

bolts(x + 25, y + 120);
bolts(x + 50, y + 120);
bolts(x + 75, y + 120);

// Fire object "for animation"
