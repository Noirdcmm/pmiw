class Jugador {
  
  constructor() {
    this.spritesManoI = [];
    this.spritesManoD = [];
    this.vidaMinJ = 0;
    this.vidaActualJ = 100;
    
    this.frameiManoIddle  = 0;
    this.frameiManoPunch  = 22;
    this.frameiManoFail  = 29;
    
    this.framedManoIddle= 0;
    this.framedManoPunch= 22;
    this.framedManoFail  = 29;
    
    this.contadorFramesiManoIddle = 0;
    this.contadorFramesiManoPunch = 0;
    this.contadorFramesiManoFail = 0;
    
    this.contadorFramesdManoIddle = 0;
    this.contadorFramesdManoPunch = 0;
    this.contadorFramesdManoFail = 0;
    
    this.estadoSprites = 0;
  }
  
  precargaRecursos(){
    this.cargaImagenes(this.spritesManoI, 35, "assets/Sprite-iHand", ".png");
    this.cargaImagenes(this.spritesManoD, 35, "assets/Sprite-dHand", ".png");
  }
  
  dibujar(){
    this.animacionFrames();
    
    switch(this.estadoSprites){
      case 0:
        tint(255, 210);
        image(this.spritesManoI[this.frameiManoIddle], 0, 200, 250, 250);
        image(this.spritesManoD[this.framedManoIddle], 550, 200, 250, 250);
        tint(255, 255);
        break;
      case 1:
        tint(255, 210);
        image(this.spritesManoI[this.frameiManoPunch], 0, 200, 250, 250);
        image(this.spritesManoD[this.framedManoPunch], 550, 200, 250, 250);
        tint(255, 255);
        break;
      case 2:
        tint(255, 210);
        image(this.spritesManoI[this.frameiManoFail], 0, 200, 250, 250);
        image(this.spritesManoD[this.framedManoFail], 550, 200, 250, 250);
        tint(255, 255);
        break;
    }    
  }
  
  actualizar(){
    
  }
  
  cargaImagenes(nombreArray, cantidad, ruta, tipoArchivo) {
    
    for ( let i = 0; i < cantidad; i++ ) {
      nombreArray.push( loadImage( ruta + i + tipoArchivo) );
    }
  }
  
  animacionFrames() {
    
    if ( millis() > this.contadorFramesiManoIddle + 90 ) {
      this.frameiManoIddle +=1;
      if (this.frameiManoIddle > 21) {
          this.frameiManoIddle = 0;
      }
        this.contadorFramesiManoIddle = millis()
    }
    
    if ( millis() > this.contadorFramesdManoIddle + 90 ) {
      this.framedManoIddle +=1;
      if (this.framedManoIddle > 21) {
          this.framedManoIddle = 0;
      }
        this.contadorFramesdManoIddle = millis()
    }
    
    if ( millis() > this.contadorFramesiManoPunch + 110 ) {
      this.frameiManoPunch +=1;
      if (this.frameiManoPunch > 28) {
          this.frameiManoPunch = 22;
      }
        this.contadorFramesiManoPunch = millis()
    }
    
    if ( millis() > this.contadorFramesdManoPunch + 110 ) {
      this.framedManoPunch +=1;
      if (this.framedManoPunch > 28) {
          this.framedManoPunch = 22;
      }
        this.contadorFramesdManoPunch = millis()
    }
    
    if ( millis() > this.contadorFramesiManoFail + 110 ) {
      this.frameiManoFail +=1;
      if (this.frameiManoFail > 34) {
          this.frameiManoFail = 29;
      }
        this.contadorFramesiManoFail = millis()
    }
    
    if ( millis() > this.contadorFramesdManoFail + 110 ) {
      this.framedManoFail +=1;
      if (this.framedManoFail > 34) {
          this.framedManoFail = 29;
      }
        this.contadorFramesdManoFail = millis()
    }
  }
  
  reducirVida() {
    
        this.vidaActualJ -= 20;
        if (this.vidaActualJ < this.vidaMinJ) {
            this.vidaActualJ = this.vidaMinJ;
        }
    }
}
