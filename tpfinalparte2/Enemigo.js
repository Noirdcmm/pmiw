class Enemigo {

    constructor() {
        this.vidaMinE = 0;
        this.vidaActualE = 150;
    }
    
    precargaRecursos(){
      //cargaImagenes(spritesFondo, 1, "assets/Sprite-Fondo0", ".png");
    }
    
    dibujar(){
      
    }
    
    actualizar(){
      
    }
    
    reducirVida() {
        this.vidaActualE -= 10;

        if (this.vidaActualE < this.vidaMinE) {
            this.vidaActualE = this.vidaMinE;
        }
    }
}
