var jorge_correndo, jorge_colidido;
var cenario,cenarioInvisivel,cenarioImage;
var obstacle1


function preload(){
jorge_correndo = loadAnimation("andando3.png","andando.png")
jorge_colidido = loadAnimation("triste.png")

cenarioImage = loadImage("cenario.png")

obstacle1 = loadImage("download.png")

}

function setup() {
 createCanvas(350, 350);

 cenario = createSprite(600, 161);
 cenario.addImage("cenario",cenarioImage);
 cenario.x =cenario.width /2;
 cenario.velocityX = -4;
 cenario.scale = 1.2

 jorge = createSprite(150, 150);
//jorge.addAnimation("correndo", jorge_correndo);
jorge.addAnimation("colidido", jorge_colidido)

jorge.scale = 0.2;



 cenarioInvisivel = createSprite(200,190,400,10);
cenarioInvisivel.visible = false;

console.log("hello"+ 5)

}

function draw() {
background(180);

//if(KeyDown("space")&& jorge.y >= 100) {
 // jorge.velocityY = -10;

//}
/*
jorge.velocityY = jorge.velocityY + 0.8

if (cenario.x < 0){
  cenario.x = cenario.width/2;
}

jorge.collide(cenarioInvisivel);
*/
 drawSprites();

 
}

function spawnobstacles() {
if (frameCount % 60 === 0){
  obstacle1 = createSprite(400,165,10,40);
  obstacle1.velocityX=-4
  obstacle1.scale = 0.4;
}
}
