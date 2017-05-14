var drops = [];
var dropsb = [];
var dropsc = [];

function setup() {
  createCanvas(1903, 930);
  for (var i = 0; i < 250;) {drops[i] = new Drop(); dropsb[i] = new Dropb(); i++;};
  for (var bi = 0; bi < 25;) {dropsb[bi] = new Dropb(); bi++;};
  for (var ci = 0; ci < 250;) {dropsc[ci] = new Dropc(); ci++;};
}

function draw() {
  background(55, 60, 90);
  for (var i = 0; i < 250;) {drops[i].fall(); drops[i].show();i++;};
  for (var bi = 0; bi < 25;) {dropsb[bi].fallb(); dropsb[bi].showb();bi++;};
  for (var ci = 0; ci < 250;) {dropsc[ci].fallc(); dropsc[ci].showc();ci++;};
}