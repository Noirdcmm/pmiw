// Lucas Liguori
//https://youtu.be/VdDN5vz-yZs

// Dylan Males
// https://youtu.be/nqiTfD6mX-I

let minijuego = new Minijuego();

function preload(){
  minijuego.precargaRecursos();
}

function setup() {
  minijuego.dibujar();
}


function draw() {
  minijuego.actualizar();
  
}

function mousePressed() {
  minijuego.presionarMouse();
}

function keyPressed(){
  minijuego.presionarTecla();
}
