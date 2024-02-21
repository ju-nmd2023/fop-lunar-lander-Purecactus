// Here I will create a background with animated stars

createCanvas(500, 700);

// I stole this from the lecture in canvas
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function draw() {
  push();
  noStroke();
  background(0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.01;
  }
  pop();
  beginShape();
  fill(100);
  vertex(0, 600);
  vertex(0, 700);
  vertex(500, 700);
  vertex(500, 600);
  endShape();
}
