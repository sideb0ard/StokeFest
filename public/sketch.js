let num_waves = 300;
let waveConductor;

let ocean_color;
let sky_color;
let mountain_color;

let mountains;

let cloud;

let horizon = 5; // a fifth of the screen

function setup() {
  createCanvas(windowWidth, windowHeight);

  waveConductor = new WaveConductor(num_waves);
  waveConductor.createWaves();

  sky_color = color(176, 225, 247);
  ocean_color = color(55, 90, 255);
  mountain_color = color(145, 159, 181);

  mountains = new Mountains();

  cloud = new Cloud();
}

function draw() {

  background(ocean_color);
  noFill();
  waveConductor.displayWaves();
  fill(255, 204, 0);
  noStroke();
  textSize(32);

  drawSky(horizon, sky_color);
  mountains.display(mountain_color);

  //cloud.display();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
