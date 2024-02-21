let angle1 = 0;
let angle2 = 0;
let petalRotation1 = 0;
let petalRotation2 = 0;
let flowerX1 = 200; // Diam di tempat
let flowerX2 = 600;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);

  // Garis pembatas
  stroke(0);
  strokeWeight(2);
  line(400, 0, 400, height);

  // Bunga 1 (Diam di tempat)
  translate(flowerX1, 250);

  // Gambar tangkai
  stroke(0, 128, 0);
  strokeWeight(6);
  line(0, 0, 0, 120);



  // Gambar kelopak bunga
  for (let i = 0; i < 6; i++) {
    rotate(radians(60));
    petal();
  }

  // Gambar tengah bunga
  fill(255, 255, 0);
  ellipse(0, 0, 40, 40);

  // Gambar daun
  fill(0, 128, 0);
  ellipse(0, 120, 40, 20);



  // Bunga 2 (Bergerak ke kiri dan kanan)
  flowerX2 += 2 * cos(angle2);

  // Reset translasi untuk bunga ke-2
  resetMatrix();
  translate(flowerX2, 250);

  // Gambar tangkai
  stroke(0, 128, 0);
  strokeWeight(6);
  line(0, 0, 0, 120);

  // Animasi rotasi kelopak bunga
  rotate(radians(petalRotation2));

  // Gambar kelopak bunga
  for (let i = 0; i < 6; i++) {
    rotate(radians(60));
    petal();
  }

  // Gambar tengah bunga
  fill(255, 255, 0);
  ellipse(0, 0, 40, 40);

  // Gambar daun
  fill(0, 128, 0);
  ellipse(0, 120, 40, 20);

  // Animasi rotasi dan pergerakan
  angle2 += 0.01;
  petalRotation2 += 1;
}

function petal() {
  fill(255, 192, 203);
  beginShape();
  curveVertex(-10, 0);
  curveVertex(0, 40);
  curveVertex(10, 0);
  curveVertex(0, -40);
  endShape(CLOSE);
}