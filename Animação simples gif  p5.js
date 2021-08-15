//uma animação em loop

var imagem = [];
var contador = 0;
var tempo = 0;

function preload(){
  imagem[0] = loadImage('img/Attack__000.png');
  imagem[1] = loadImage('img/Attack__001.png');
  imagem[2] = loadImage('img/Attack__002.png');
  imagem[3] = loadImage('img/Attack__003.png');
  imagem[4] = loadImage('img/Attack__004.png');
  imagem[5] = loadImage('img/Attack__005.png');
  imagem[6] = loadImage('img/Attack__006.png');
  imagem[7] = loadImage('img/Attack__007.png');
  imagem[8] = loadImage('img/Attack__008.png');
  imagem[9] = loadImage('img/Attack__009.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(imagem[contador], 10, 10, 150, 150);
  tempo++;
  if(tempo>2){
    contador++;
    tempo=0
  }
  if(contador>9)
    contador = 0;
}
