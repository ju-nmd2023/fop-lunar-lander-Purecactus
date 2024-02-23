function setup() {
  createCanvas(1200, 700);
  frameRate(30);
  textAlign(CENTER);
  rocketY = 0;
}
let state = "start";
let gameIsRunning = true; // A variable that detects if the game is running or not

// This is my function for the starry background, I stole it from chapter 15: Example - Night sky, on the foundations of programming website.
function backGround() {
  push();
  noStroke();
  background(0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.01;
  }
  pop();
}

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * 1200);
  const y = Math.floor(Math.random() * 700);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

// This is my function for the craters in the moonsurface
function moonCrater(x, y, s) {
  push();
  noStroke();
  fill(200);
  ellipse(x + 3 * s, y + 3 * s, 40 * s);
  fill(80);
  ellipse(x, y, 40 * s);
  fill(100);
  ellipse(x + 1.5 * s, y + 1.5 * s, 40 * s);
  pop();
}

// This is my function for the rocketship
function rocket(x, y, s) {
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

  // Fire object "for animation"
  beginShape();
  fill(255, 21, 0);
  noStroke();
  vertex(x + 27 * s, y + 160 * s);
  vertex(x + 22 * s, y + 173 * s);
  vertex(x + 32 * s, y + 168 * s);
  vertex(x + 27 * s, y + 188 * s);
  vertex(x + 37 * s, y + 178 * s);
  vertex(x + 50 * s, y + 203 * s);
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
  vertex(x + 50 * s, y + 200 * s);
  vertex(x + 60 * s, y + 175 * s);
  vertex(x + 70 * s, y + 185 * s);
  vertex(x + 65 * s, y + 165 * s);
  vertex(x + 75 * s, y + 170 * s);
  vertex(x + 70 * s, y + 160 * s);
  endShape(CLOSE);
}

// Here is the function for the start screen
function startScreen() {
  backGround();
  fill(255);
  textSize(60);
  text("Lunar lander", 600, 300);
  fill(180, 180, 180);
  textSize(30);
  text("click mouse to begin the landing sequence", 600, 400);
}

let rocketY = 0; // This allows us to add movement to the rocketship
let velocity = 1;
const acceleration = 0.2;

// Here is the function for the actual game itself
function gameScreen() {
  backGround();

  beginShape();
  fill(100);
  vertex(0, 600);
  vertex(0, 700);
  vertex(1200, 700);
  vertex(1200, 600);
  endShape();
  moonCrater(100, 630, 1.3);
  moonCrater(180, 680, 0.8);
  moonCrater(300, 640, 1);
  moonCrater(400, 630, 1.1);
  moonCrater(480, 676, 0.9);
  moonCrater(600, 640, 1.3);
  moonCrater(700, 670, 1.1);
  moonCrater(840, 640, 1.3);
  moonCrater(920, 650, 1.4);
  moonCrater(970, 680, 0.6);
  moonCrater(1090, 660, 1);

  rocket(550, rocketY, 0.8);

  rocketY = rocketY + velocity;
  velocity = velocity + acceleration;

  if (keyIsDown(32)) {
    /* This adds a click function that makes the rocket fly up 
    when you press the spacebar */
    velocity = velocity - 4 * acceleration;
  }

  // Both the if and else if statement will stop the game when the rocket is at a certain level
  if (rocketY > 480 && velocity > 4) {
    gameIsRunning = false;
  } else if (rocketY > 480 && velocity < 4) {
    gameIsRunning = false;
  }
}

// Function for the screen when the landing is successfull
function gameSuccess() {
  backGround();

  beginShape();
  fill(100);
  vertex(0, 600);
  vertex(0, 700);
  vertex(1200, 700);
  vertex(1200, 600);
  endShape();
  moonCrater(100, 630, 1.3);
  moonCrater(180, 680, 0.8);
  moonCrater(300, 640, 1);
  moonCrater(400, 630, 1.1);
  moonCrater(480, 676, 0.9);
  moonCrater(600, 640, 1.3);
  moonCrater(700, 670, 1.1);
  moonCrater(840, 640, 1.3);
  moonCrater(920, 650, 1.4);
  moonCrater(970, 680, 0.6);
  moonCrater(1090, 660, 1);

  fill(255);
  textSize(50);
  text("Succesfull landing!", 600, 300);
  fill(180);
  textSize(30);
  text("Click mouse to restart", 600, 400);
}

// Function for the game over screen when you crash the rocketship
function gameOver() {
  backGround();

  beginShape();
  fill(100);
  vertex(0, 600);
  vertex(0, 700);
  vertex(1200, 700);
  vertex(1200, 600);
  endShape();
  moonCrater(100, 630, 1.3);
  moonCrater(180, 680, 0.8);
  moonCrater(300, 640, 1);
  moonCrater(400, 630, 1.1);
  moonCrater(480, 676, 0.9);
  moonCrater(600, 640, 1.3);
  moonCrater(700, 670, 1.1);
  moonCrater(840, 640, 1.3);
  moonCrater(920, 650, 1.4);
  moonCrater(970, 680, 0.6);
  moonCrater(1090, 660, 1);

  fill(255);
  textSize(50);
  text("Landing failed...", 600, 300);
  fill(180);
  textSize(30);
  text("Click mouse to restart", 600, 400);
}

// This function let's the player click the mouse in order to change game states... not while the game itself is running of course
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "success") {
    state = "start";
  } else if (state === "fail") {
    state = "start";
  }
}

// Here I draw all of my game screens depending on the state of the game
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "success") {
    gameSuccess();
  } else if (state === "fail") {
    gameOver();
  }

  // Here I stop the game if the rocket is at the correct level and the speed is slow enough, success
  if (gameIsRunning === false && velocity < 4) {
    state = "success";
    gameIsRunning = "true";
    rocketY = 0;
    velocity = 1;
  }
  // Here I stop the game if the rocket is at the correct level but the speed is too high, fail!
  if (gameIsRunning === false && velocity > 4) {
    state = "fail";
    gameIsRunning = "true";
    rocketY = 0;
    velocity = 1;
  }
}
