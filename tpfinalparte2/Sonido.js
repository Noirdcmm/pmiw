class Sonido {
  constructor() {
    this.sonidoFondo;
    this.sonidoDañoJ;
    this.sonidoDañoE;
    this.sonidoTenebroso;
  }

  precargaRecursos(){
    this.sonidoDanioJ = loadSound('/assets/Dano0.wav');
    this.sonidoDanioE = loadSound('/assets/Dano1.wav');
    this.sonidoTenebroso = loadSound('/assets/Tenebroso.wav'); 
    this.sonidoFondo = loadSound('/assets/Terror.wav'); 
  }

  danioJugador(){
    this.sonidoDanioJ.play();
  }

  danioEnemigo(){
    this.sonidoDanioE.play();
  }

  playTenebroso(){
    this.sonidoTenebroso.loop();
  }

  stopTenebroso(){
    this.sonidoTenebroso.stop();
  }

  playTerror(){
    this.sonidoFondo.play();
  }

  stopTerror(){
    this.sonidoFondo.stop();
  }
}
