ps = []

function setup() {
  createCanvas(800, 800);
  for(i = 0;i<10;i++){
    ps[i] = createVector(random(0,width), random(0,height));
  }
}

function draw() {
  background(220);
  for(i=100;i<width-100;i++){
    for(j = 100;j<height-100;j++){
      let c = color(204 - j, 153 - i, 255);
      set(i,j,c);
    }
  }
  updatePixels();
  strokeWeight(5);
  for(i = 0;i<10;i++){
    point(ps[i].x, ps[i].y);
  }
  
}
