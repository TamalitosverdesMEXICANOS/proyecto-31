var boundary1;
var boundary2;


function setup(){
  createCanvas(400, 400);
  //Límites del juego
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  //Crea al sprite del personaje y dale color
  
  
  //Crea los carros que funcionarán como obstáculos y pintalos de rojo
  
  
  //Crea la variable que guardará los intentos el jugador
  
  
  
  //Agrega velocidad  para hacer que los autos  se muevan.

}

function draw() {
   background("white");
   //Muestra en la pantalla los intentos del jugador
   
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
//Crea la función bounceoff para hacer que el auto rebote en los límites.
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
//Agregar la condición de reducir la vida de Sam si toca el carro.
  
 drawSprites();
}
