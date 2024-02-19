// Here I will create a background with animated stars

createCanvas(500, 700);

// I stole this from the lecture in canvas
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0, i < 50, i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}