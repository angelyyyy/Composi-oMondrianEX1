function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 200,25);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
