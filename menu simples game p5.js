var posicaoX = 45;
var escalaY = 35;
var posicaoY = 103;
var opção = 1;
var tela = 0;

function setup() {
createCanvas(400, 400);
}
function draw() {
  background('#FD0076');
  if(tela==0)
  menu();
  if(tela==1)
    fase1();
  if(tela==2)
    instruções();
  if(tela==3)
    créditos();
}

function menu(){
  rect(posicaoX, posicaoY, 150, escalaY);
  
  textSize(50);
  text('Mini Game', 90, 70);
  textSize(30);
  text('Jogar', 50, 130);
  text('instruções', 50, 230);
  text('créditos', 50, 330);
}

function fase1(){
  textSize(32);
  text('Fase 1', 90, 130);
}

function instruções(){
  textSize(32);
  text('Instruções', 90, 130);
}

function créditos(){
  textSize(32);
  text('Créditos', 90, 130);
}

function keyPressed(){
  if(key=='ArrowUp' && posicaoY>130){
    
    posicaoY = posicaoY - 100;
    opção = opção-1
  console.log(opção)
  }
  
  if(key=='ArrowDown'&& posicaoY<300){
    posicaoY = posicaoY + 100;
    opção = opção+1
  console.log(opção)
  }
  if(key=='Enter'){
    tela = opção
  }
  if(key=='Escape'){
    tela = 0
  }
}
