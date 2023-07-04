class Mountains {
  constructor() {}
  display(mountain_color) {
    fill(mountain_color);
    let x = width / 2 - 100;
    let y = height / horizon;
    beginShape();
    vertex(x, y);
    vertex(x + 20, y - 10);
    vertex(x + 40, y - 5);
    vertex(x + 60, y - 15);
    vertex(x + 100, y);
    endShape(CLOSE);
  }
}

class Clouds {
  constructor(horizon) {
    this.one_top = random(height / horizon);
    this.one_bot = random(height / horizon);
    this.two_top = random(height / horizon);
    this.two_bot = random(height / horizon);

    this.three_left = random(height / horizon);
    this.three_right = random(height / horizon);

  }
  display(cloud_color) {
    fill(cloud_color);
    noStroke();
    if (frameCount % 10 == 0) {
      this.one_top += random() - 0.5;
      this.one_bot += random() - 0.5;
      this.two_top += random() - 0.5;
      this.two_bot += random() - 0.5;
      this.three_left += random() - 0.5;
      this.three_right += random() - 0.5;
    }
    beginShape();
    vertex(0, this.one_top);
    vertex(width, this.two_top);
    vertex(width, this.two_bot);
    vertex(0, this.one_bot);
    endShape(CLOSE);

    beginShape();
    vertex(0, height / horizon);
    vertex(0, this.three_left);
    vertex(width, this.three_right);
    vertex(width, height / horizon);
    endShape(CLOSE);
  }
}

function drawSky(horizon, sky_color) {
  fill(sky_color);
  noStroke();
  rect(0, 0, width, height / horizon);
}
