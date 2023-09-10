let num_waves = 300;
let waveConductor;

let ocean_color;
let sky_color;
let cloud_color;
let mountain_color;

let mountains;

let clouds;

let title_img;
let title_letters_graphics = [];
let title_letters_positions = [];

let horizon = 5; // a fifth of the screen

class LetterGraphicPosition {
  constructor() {
    this.x_offset = 0;
    this.y_offset = 0;
    this.rotation = 0;
  }
  update() {
    if (frameCount % 15 == 0) {
      this.rotation += random() - 0.5;
      this.x_offset += random() - 0.5;
      this.y_offset += random() - 0.5;
    }
  }
}

function preload() {
  title_img = loadImage('images/stokefest_yello_logo.png');
}

let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  formdiv = createDiv('').size(100, 100);
  waveConductor = new WaveConductor(num_waves);
  waveConductor.createWaves();

  //sky_color = color(176, 225, 247);
  sky_color = color(238, 108, 97);
  cloud_color = color(247, 141, 66);
  ocean_color = color(55, 90, 255);
  mountain_color = color(145, 159, 181);

  mountains = new Mountains();

  clouds = new Clouds(horizon);

  title_img.resize(530, 0);
}

function DrawTitle() {
  image(title_img, 0, 0);
  // let num_letters = title_letters_graphics.length;
  // let let_size = 70;
  // let start_y = height / horizon + 10;
  // let start_x = (width / 2) - (num_letters * let_size / 2);

  // for (let i = 0; i < num_letters; i++) {
  //   title_letters_graphics[i].resize(let_size, 0);
  //   title_letters_positions[i].update();
  //   push();
  //   translate(start_x + i * let_size + title_letters_positions[i].x_offset, start_y + title_letters_positions[i].y_offset);
  //   //rotate(title_letters_positions[i].rotation);
  //   image(title_letters_graphics[i], 0, 0);

  //   pop();
  //   //image(title_letters_graphics[i], start_x + i * let_size, start_y);
  // }

}

function sea_life() {}

function draw() {

  background(ocean_color);
  noFill();
  waveConductor.displayWaves();
  fill(255, 204, 0);
  noStroke();
  textSize(32);

  drawSky(horizon, sky_color);
  clouds.display(cloud_color);
  mountains.display(mountain_color);

  //DrawTitle();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
