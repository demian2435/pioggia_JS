function Dropc() {
  this.xc = random(width);
  this.yc = random(-500, -50);
  this.lenc = random(2, 7);
  this.yspeedc = random(5,10);

  this.fallc = function() {
    this.yc = this.yc + this.yspeedc;

    if (this.yc > height) {
      this.yc = random(-450, 0);
      this.yspeedc = random(5,10);
	  this.xc = random(width);
    }
  }

  this.showc = function() {
    thickc = 1;
    strokeWeight(thickc);
    stroke(0, 0, 150);
    line(this.xc, this.yc, this.xc, this.yc+this.lenc);
  }
}
