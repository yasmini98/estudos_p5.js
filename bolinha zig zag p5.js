var posicaox = 0
var posicaoy = 0
var velocidadex = 5
var velocidadey = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#3543ff');
  ellipse(posicaox,posicaoy,50,50);
  posicaox = posicaox+velocidadex;
  posicaoy = posicaoy+velocidadey
  
  if(posicaox>400)
    velocidadex = velocidadex*-1
  if(posicaox<0)
    velocidadex = 5
  
  if(posicaoy>400)
    velocidadey = velocidadey*-1
  if(posicaoy<0)
    velocidadey = 5
}
