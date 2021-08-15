var posicaoX = 45;
var escalaY = 35;
var posicaoY = 103;
var opção = 1

function setup() {
createCanvas(400, 400);
}
function draw() {
  background('#FD0076');
  
  rect(posicaoX, posicaoY, 150, escalaY);
  
  textSize(50);
  text('Mini Game', 90, 70);
  textSize(30);
  text('Jogar', 50, 130);
  text('instruções', 50, 230);
  text('créditos', 50, 330);
}

function keyPressed(){
  if(key=='ArrowUp' && posicaoY>130)
    posicaoY = posicaoY - 100;
  if(key=='ArrowDown'&& posicaoY<300)
    posicaoY = posicaoY + 100;
  opção = opção + 1
  console.log(opção)
}
