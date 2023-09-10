let SWELLING = 0;
let DISIP = 1;

let wind = 0.01;

class Wave {
  constructor() {
    this.reset();
    this.width = random(30) + 5;
    this.depth = random(20) + 5;
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.state = SWELLING;
    this.width = 0;
    this.depth = 0;
    this.offset = 0;
    this.is_single = Math.random() < 0.5;
    this.second_x_offset = random(2) - 1;
    this.second_y_offset = random(2) - 1;
    this.transparent_possibility = (255 / height / 2) * this.y * 2;
    // print("ATRS", this.)
    this.color = color(255, 255, 255, random(this.transparent_possibility));
  }

  display() {
    stroke(this.color);

    if (frameCount % 2 == 0 && random() > 0.6) {
      if (this.state == SWELLING) {
        this.width += random();
        this.depth += random();
        if (random() > 0.999) {
          this.state = DISIP;
        }
      } else if (this.state == DISIP) {
        this.width -= random();
        this.depth -= random();
        this.offset += random(2);
      }

      if (this.width > 20) {
        this.state = DISIP;
      } else if (this.width <= 0) {
        this.reset();
      }

      this.x += random() - 0.5;
      this.y += random() - 0.5;
    }

    let this_weight = ((this.depth / 20) % 3) + this.y / 400;
    strokeWeight(this_weight);

    let second_x = this.x + this.width;
    curve(
      this.x + random() - 0.5,
      this.y - this.depth,
      this.x,
      this.y,
      second_x,
      this.y,
      second_x,
      this.y - this.depth
    );
    if (!this.is_single) {
      curve(
        second_x + this.offset + this.second_x_offset + (random() - 0.5),
        this.y - this.depth + this.second_y_offset,
        second_x + this.offset + this.second_x_offset,
        this.y + this.second_y_offset,
        second_x + this.width,
        this.y + +this.second_y_offset,
        second_x + this.width + random() - 0.5 + (random() - 0.5),
        this.y - this.depth + this.second_y_offset
      );
    }
  }
}

class WhiteCap {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.weight = random(4);
    this.color = color(255, 255, 255, random(100));
  }
  display() {
    stroke(this.color);
    strokeWeight(this.weight);
    point(this.x, this.y);
    this.weight -= 0.05;
    if (this.weight <= 0) {
      this.reset();
    }
  }
}

class WaveConductor {
  constructor(num_waves) {
    this.num_waves = num_waves;
    this.waves = [];
    this.caps = [];
  }
  createWaves() {
    for (let i = 0; i < this.num_waves; i++) {
      this.waves.push(new Wave());
    }
    for (let i = 0; i < this.num_waves / 3; i++) {
      this.caps.push(new WhiteCap());
    }
  }

  displayWaves() {
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].display();
    }
    for (let i = 0; i < this.caps.length; i++) {
      this.caps[i].display();
    }
  }
}
