// Variables
let x = 0;
let y = 0;
let s = 1.2;

// The body of the rocket
push();
noStroke();
fill(251, 144, 98);
rect(x, y, 100 * s, 150 * s, 20 * s);
fill(255, 254, 242);
rect(x, y, 100 * s, 100 * s);

fill(251, 144, 98);
arc(x + 50 * s, y, 100 * s, 170 * s, PI, 2 * PI);
fill(255, 254, 242);
quad(
  x + 20 * s,
  y + 150 * s,
  x + 25 * s,
  y + 160 * s,
  x + 75 * s,
  y + 160 * s,
  x + 80 * s,
  y + 150 * s
);

beginShape();
fill(255, 254, 242);
vertex(x + 100 * s, y + 25 * s);
bezierVertex(
  x + 130 * s,
  y + 60 * s,
  x + 160 * s,
  y + 90 * s,
  x + 100 * s,
  y + 90 * s
);
endShape();

beginShape();
vertex(x, y + 25 * s);
bezierVertex(x - 30 * s, y + 60 * s, x - 60 * s, y + 90 * s, x, y + 90 * s);
endShape();
pop();

// Window
push();
strokeWeight(3);
stroke(160);
fill(0, 210, 255);
ellipse(x + 50 * s, y + 50 * s, 70 * s);

push();
beginShape();
noStroke();
fill(255);
vertex(x + 25 * s, y + 50 * s);
bezierVertex(
  x + 25 * s,
  y + 50 * s,
  x + 20 * s,
  y + 70 * s,
  x + 50 * s,
  y + 75 * s
);
bezierVertex(
  x + 50 * s,
  y + 75 * s,
  x + 55 * s,
  y + 72.5 * s,
  x + 50 * s,
  y + 70 * s
);
bezierVertex(
  x + 50 * s,
  y + 70 * s,
  x + 30 * s,
  y + 70 * s,
  x + 30 * s,
  y + 50 * s
);
bezierVertex(
  x + 30 * s,
  y + 50 * s,
  x + 27.5 * s,
  y + 45 * s,
  x + 25 * s,
  y + 50 * s
);
endShape();
pop();

// Details
function bolts(x, y) {
  fill(160);
  ellipse(x, y, 8 * s);
}

bolts(x + 25 * s, y + 120 * s);
bolts(x + 50 * s, y + 120 * s);
bolts(x + 75 * s, y + 120 * s);

// Feet for landing
stroke(30);
line(x + 50, y + 190, x + 30, y + 220);
line(x + 30, y + 220, x + 20, y + 220);
line(x + 70, y + 190, x + 90, y + 220);
line(x + 90, y + 220, x + 100, y + 220);

/*
// Fire object "for animation"
beginShape();
fill(255, 21, 0);
noStroke();
vertex(x + 27 * s, y + 160 * s);
vertex(x + 22 * s, y + 173 * s);
vertex(x + 32 * s, y + 168 * s);
vertex(x + 27 * s, y + 188 * s);
vertex(x + 37 * s, y + 178 * s);
vertex(x + 50 * s, y + 203 * s); //Middle point
vertex(x + 63 * s, y + 178 * s);
vertex(x + 73 * s, y + 188 * s);
vertex(x + 68 * s, y + 168 * s);
vertex(x + 78 * s, y + 173 * s);
vertex(x + 73 * s, y + 160 * s);
endShape(CLOSE);

beginShape();
fill(255, 128, 0);
noStroke();
vertex(x + 30 * s, y + 160 * s);
vertex(x + 25 * s, y + 170 * s);
vertex(x + 35 * s, y + 165 * s);
vertex(x + 30 * s, y + 185 * s);
vertex(x + 40 * s, y + 175 * s);
vertex(x + 50 * s, y + 200 * s); //Middle point
vertex(x + 60 * s, y + 175 * s);
vertex(x + 70 * s, y + 185 * s);
vertex(x + 65 * s, y + 165 * s);
vertex(x + 75 * s, y + 170 * s);
vertex(x + 70 * s, y + 160 * s);
endShape(CLOSE);
*/
