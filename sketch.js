ps = []
r = [66,66,229,255,255,222,245,154,77,154]
g = [135,245,252,169,71,154,154,174,255,255]
b = [245,126,136,71,71,245,222,245,204,77]

borders = []

function setup() {
  createCanvas(700, 700);
  colours = [(204,153,0),(204,153,255)]
  for(i = 0;i<10;i++){
    ps[i] = createVector(random(0,width), random(0,height));
  }
}

var minD;
var d;

function draw() {
  background(220);
  bCnt = 0;
  for(i = 0;i<width;i++){
    for(j = 0;j<height;j++){
      minD = 10000
      for(k = 0;k<10;k++){
        d = Math.sqrt(((i - ps[k].x)*(i - ps[k].x))+((j - ps[k].y)*(j - ps[k].y)));
        if(d<minD){
          minD = d;
          x = k;
        }
      }
      let c = color(r[x] ,g[x] ,b[x]);
      set(i,j,c);
    }
  }
  updatePixels();
  strokeWeight(5);
  for(i = 0;i<10;i++){
    point(ps[i].x, ps[i].y);
  }
  
}
