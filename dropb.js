function Dropb() {
  this.xb = random(width);
  this.yb = random(-500, -50);
  this.lenb = random(10, 30);
  this.yspeedb = random(20,40);

  this.fallb = function() {
    this.yb = this.yb + this.yspeedb;

    if (this.yb > height) {
      this.yb = random(-450, 0);
      this.yspeedb = random(20,40);
	  this.xb = random(width);
    }
  }

  this.showb = function() {
    thickb = random(5, 7);
    strokeWeight(thickb);
    stroke(0, 0, 210);
    line(this.xb, this.yb, this.xb, this.yb+this.lenb);
  }
}
