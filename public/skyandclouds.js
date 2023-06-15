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

class Cloud {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.density = random(8) + 2;
  }
  display() {
    for (let i = 0; i < this.density; i++) {
      translate(this.x + random() - 0.5, this.y + random() - 0.5);
      circle(0, 0, random(30));
    }
  }
}

function drawSky(horizon, sky_color) {
  fill(sky_color);
  noStroke();
  rect(0, 0, width, height / horizon);
}
