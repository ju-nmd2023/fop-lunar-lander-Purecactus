let state = "start";
let gameOverTimer = 0; // A variable that brings the game back to the start scrreen after some time
let gameIsRunning = true; // A variable that detects if the game is running or not

function startScreen() {
  background(40, 40, 40);
  text("Start", 130, 225);
  textSize(60);
}

function gameScreen() {
  background(100, 100, 100);
  text("Game", 130, 225);
  textSize(60);
}

function gameOverScreen() {
  background(200, 30, 30);
  text("Game Over", 130, 225);
  textSize(60);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "gameOver") {
    gameOverScreen();
    gameOverTimer = gameOverTimer + 1;
    if (gameOverTimer >= 100) {
      gameOverTimer = 0;
      state = "start";
    }
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  }
}
