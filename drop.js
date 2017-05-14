function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.len = random(5, 15);
  this.yspeed = random(10,20);

  this.fall = function() {
    this.y = this.y + this.yspeed;

    if (this.y > height) {
      this.y = random(-450, 0);
      this.yspeed = random(10,20);
	  this.x = random(width);
    }
  }

  this.show = function() {
    thick = random(1, 3);
    strokeWeight(thick);
    stroke(0, 0, 100);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
