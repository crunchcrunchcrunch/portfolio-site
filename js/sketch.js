let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -3);
  //background(125);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  xPos = xPos + (mouseX - xPos) * easing;
  yPos = yPos + (mouseY - yPos) * easing;

  drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
  //strokeWeight(0);
  //fill(random(200, 255), random(200, 255), random(200, 255));
  //ellipse(_x, _y, 30, 30);

  fill(300, 130, 240);
  ellipse(_x, _y, 30, 30);
  ellipse(_x - 20, _y + 5, 30, 30);

  fill(300, 100, 200);
  ellipse(_x + 20, _y + 0);
}
