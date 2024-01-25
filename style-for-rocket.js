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
fill(255, 254, 242);
quad(x + 20, y + 150, x + 25, y + 160, x + 75, y + 160, x + 80, y + 150);

beginShape();
fill(255, 254, 242);
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

push();
beginShape();
noStroke();
fill(255);
vertex(x + 25, y + 50);
bezierVertex(x + 25, y + 50, x + 20, y + 70, x + 50, y + 75);
bezierVertex(x + 50, y + 75, x + 55, y + 72.5, x + 50, y + 70);
bezierVertex(x + 50, y + 70, x + 30, y + 70, x + 30, y + 50);
bezierVertex(x + 30, y + 50, x + 27.5, y + 45, x + 25, y + 50);
endShape();
pop();

// Details
function bolts(x, y) {
  fill(160);
  ellipse(x, y, 8);
}

bolts(x + 25, y + 120);
bolts(x + 50, y + 120);
bolts(x + 75, y + 120);

// Fire object "for animation"
beginShape();
fill(255, 21, 0);
noStroke();
vertex(x + 27, y + 163);
vertex(x + 22, y + 173);
vertex(x + 32, y + 168);
vertex(x + 27, y + 188);
vertex(x + 37, y + 178);
vertex(x + 50, y + 203); //Middle point
vertex(x + 63, y + 178);
vertex(x + 73, y + 188);
vertex(x + 68, y + 168);
vertex(x + 78, y + 173);
vertex(x + 73, y + 163);
endShape(CLOSE);

beginShape();
fill(255, 128, 0);
noStroke();
vertex(x + 30, y + 160);
vertex(x + 25, y + 170);
vertex(x + 35, y + 165);
vertex(x + 30, y + 185);
vertex(x + 40, y + 175);
vertex(x + 50, y + 200); //Middle point
vertex(x + 60, y + 175);
vertex(x + 70, y + 185);
vertex(x + 65, y + 165);
vertex(x + 75, y + 170);
vertex(x + 70, y + 160);
endShape(CLOSE);
