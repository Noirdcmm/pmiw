class Minijuego {
  
  constructor() {
    this.contador = 0;
    this.radio = 180;
    this.indice = 0;
    this.ytexto = 0;
    this.xtexto = -200;
    this.xtexto1 = 1000;
    this.angulo = 0;
    this.velocidad = 0.03;
    this.velocidadCreditos = 2;
    this.zonas = [];
    this.textoActual = 0;
    this.imagenActual = 0;
    this.personajeActual = 0;
    this.spritesFondo = [];
    this.imagenesFondo = [];
    this.imagenesFuego = [];
    this.personajes = [
      "",
      "Detective",
      "Desconocido"
    ];
    this.dialogosPersonaje = [
    
    "Tomas el otro camino, que te conduce a una zona oscura del cementerio. Alli encuentras una area derrumbada por la que puedes entrar con facilidad.",
  
    "Por seguridad, decides idear un plan y comienzas a rociar combustible en algunas zonas del lugar, esperando no tener que recurrir a iniciar fuego en caso de una emergencia extrema.",
  
    "Una vez vaciado el recipiente de combustible, lo ocultas en rincon del area y comienzas a investigar el lugar.",
  
    "Mientras investigas el lugar, logras escuchar el chirrido de una puerta metalica, como la de la entrada principal. Alzas la vista en busqueda de quien pudo haber pruducido ese chirrido, a unos cuantos pasos logras dinsitnguir a nn sujeto que se acerca lentamente.",
  
    "Eres realmente tu quien a quien contacte?!",
  
    "De verdad llegaste, realmente te atreviste a venir a buscar el 'premio'... Llevo meses buscando a alguien que se atreviera a venir a recibirlo y aqui estas. Mira, aquello que buscas esta alli dentro del ataud que esta detras de ti.",
  
    "Antes de darte la vuelta para mirar hacia donde te indica, la luz de la luna te permite distinguir algo raro, el sujeto llevaba algo escondido en su mano",
  
    "Te das la vuelta con cuidadosamente, y te quedas inmovil mirando frente al ataud.",
  
    "Al intentar abrir el ataud de madera, oyes como el sujeto se acerca cada vez mas y mas a ti. De pronto recibes un golpe seco y caes en el suelo mientras el sujeto intenta golpearte una vez mas pero esta vez con un fierro metalico.",
  
    "Reaccionas agilmente y le devuelves un golpe, seguido de una patada, acto seguido lo desarmas y lanzas el fierro a lo lejos. Aprovechas el momento para sacar tu encendedor, el que siempre llevas contigo para fumar, e inicias un fuego en el lugar.",
  
    "Antes de empezar a huir el sujeto intenta aferrarse a ti agarrandote de los tobillos, pero lo pateas con suficiente fuerza para aturdirlo. Aprovechas la oportunidad y corres con todas tus fuerzas hasta alejarte de la zona.",
  
    "Consigues escapar con vida, pero el fuego consume lo que podria haber sido una prueba fundamental: la escena del crimen. Al menos sigues vivo.",
    
    "Recibes todos los golpes del sujeto y fallas en devolverle uno, mientras intentas arrastrarte para escapar el sigue golpeandote..",
    
    "Aturdido por el dolor, apenas consigues distinguir lo que ves a tu alrededor. Sin embargo, alcanzas a ver como el sujeto se detiene con una sonrisa en su rostro. Aquello es lo ultimo que miras antes de perder el conocimiento...",
    ]
    this.intrucciones = "Estas siendo atacado y debes defenderte, para ello debes de atacar a tu oponente hasta agotarlo. El mecanismo es simple, da click y acierta sobre las zonas que se generen en el circulo, si atinas correctamente reduciras vitalidad a tu enemigo y si fallas te restaras vitalidad a ti mismo, buena suerte..";
    this.opacidadBloque = 0;
    this.opacidadRectDialog = 0;
    this.opacidadTextoDialog = 0;
    
    this.opPanel = 0;
    this.opRectDialog = 0;
    this.opTextoDialog = 0;
    this.opBoton = 0;
    
    this.estadoNarrando = false;
    this.estadoClick = true;
    this.estadoTexto = true;
    this.estadoBloqueNombre = false;
    this.estadoInstrucciones = false;
    this.instruccionesMostradas = false;
    this.colorBoton = 0;
    this.colorTextBtn = 255;
    this.fuenteTexto;
    this.minTexto = 0;
    this.maxTexto = 0;
    this.pantalla = 0;
    this.contador = 0;
    this.jugador = new Jugador();
    this.enemigo = new Enemigo();
    this.sonido = new Sonido();
  }
  
  precargaRecursos(){
    this.fuenteTexto = loadFont('/assets/alagard.ttf');
    this.cargaImagenes(this.imagenesFondo, 7, "/assets/Fondo", ".png");
    this.cargaImagenes(this.imagenesFuego, 5, "/assets/Fuego", ".png");
    this.jugador.precargaRecursos();
    this.sonido.precargaRecursos();
    
  }
  
  dibujar(){
    createCanvas(800, 450);
  }
  
  actualizar(){
    background(100);
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'transparent';
    image(this.imagenesFondo[this.imagenActual], 0, 0, 800, 450);
    textFont(this.fuenteTexto);
    switch (this.pantalla) {
    case 0:
      this.cargarDialogo();
      if(this.estadoInstrucciones){
        this.cargarInstrucciones();
      }
      if (this.textoActual === 0) {
        this.personajeActual = 0;
        this.entradaSalidaB(0);
      }
      
      if (this.textoActual === 3) {
        this.imagenActual = 1;
      }
      if (this.textoActual === 4) {
        this.estadoBloqueNombre = true;
        this.personajeActual = 1;
      }
      if (this.textoActual === 5) {
        this.personajeActual = 2;
      }
      if (this.textoActual === 6) {
        this.estadoBloqueNombre = false;
      }
      
      if (this.textoActual === 12 && this.opacidadTextoDialog < 255 || this.textoActual === 9 && this.opacidadTextoDialog < 255) {
        this.entradaSalidaB(0);
      }
      
      if (this.textoActual === 9) {
        this.imagenActual = 3;
      }
      if (this.textoActual === 10) {
        this.imagenActual = 4;
      }
      if (this.textoActual === 11) {
        this.imagenActual = 5;
      }
      if (this.textoActual === 13) {
        this.imagenActual = 6;
      }
      
      if (!this.estadoClick) {
        this.entradaSalidaB(1);
      }
      
      if (!this.instruccionesMostradas && this.textoActual === 8 && this.pantalla === 0) {
        this.entradaSalidaB(1);
        this.estadoInstrucciones = true;
        this.entradaInstrucciones();
      }
      if(this.estadoInstrucciones){
        if (mouseX > 310 && mouseY > 300 && mouseX < 490 && mouseY < 360){
          this.colorBoton = 255;
          this.colorTextBtn = 0;
        }
        else {
          this.colorBoton = 0;
          this.colorTextBtn = 255;
        }
      }
      if (this.textoActual >= this.dialogosPersonaje.length) {
        this.pantalla = 2;
      }
      break;

    case 1:
      this.imagenActual = 2;
      this.jugador.dibujar();
      // HUD
      fill(255);
      noStroke();
      textAlign(LEFT);
      textSize(16);
    
      text("???(HP): " + this.enemigo.vidaActualE, 30, 30);
      text("Jugador(HP): " + this.jugador.vidaActualJ, 650, 30);
      
      push();
      translate(width / 2, height / 2);
    
      this.angulo = (this.angulo + this.velocidad) % TWO_PI;
    
      if (frameCount % 90 === 0 && this.zonas.length < 3) {
        this.crearZona();
      }
    
      // círculo
      noFill();
      stroke(255);
      strokeWeight(4);
      circle(0, 0, this.radio * 2);
    
      // Zonas de clic
      for (let i = this.zonas.length - 1; i >= 0; i--) {
        let zona = this.zonas[i];
        let adentro = this.estaEnZona(zona, this.angulo);
    
        if (zona.estabaAdentro && !adentro) {
          this.jugador.reducirVida();
          this.jugador.estadoSprites = 2;
          this.zonas.splice(i, 1);
          continue;
        }
    
        zona.estabaAdentro = adentro;
    
        stroke(adentro ? color(255, 220, 0) : color(255, 60, 90));
        strokeWeight(14);
    
        arc(0, 0, this.radio * 2, this.radio * 2,
          zona.inicio, zona.inicio + zona.ancho);
      }
    
      //Barrita
      push();
      rotate(this.angulo);
      noStroke();
      fill(255);
      rect(160, -6, 40, 20);
      pop();
      
      if (this.jugador.vidaActualJ === this.jugador.vidaMinJ) {
        this.sonido.stopTerror();
        this.pantalla = 0;
        this.estadoInstrucciones = false;
        this.opPanel = 0;
        this.opRectDialog = 0;
        this.opTextoDialog = 0;
   
        this.estadoClick = true;
        this.estadoNarrando = false;
        this.estadoTexto = true;
        this.maxTexto = 0;
        
        this.textoActual = 12;
        
        this.opacidadBloque = 0;
        this.opacidadRectDialog = 0;
        this.opacidadTextoDialog = 0;
        this.imagenActual = 0;
      }
      if (this.enemigo.vidaActualE === 0) {
        this.sonido.stopTerror();
        this.pantalla = 0;
      
        this.estadoInstrucciones = false;
        this.opPanel = 0;
        this.opRectDialog = 0;
        this.opTextoDialog = 0;
      
        this.estadoClick = true;
        this.estadoNarrando = false;
        this.estadoTexto = true;
        this.maxTexto = 0;
      
        this.textoActual = 9;
      
        this.opacidadBloque = 0;
        this.opacidadRectDialog = 0;
        this.opacidadTextoDialog = 0;
        this.imagenActual = 0;
        this.zonas = [];
      }
      break;
      
    case 2:
      this.creditos();
      this.contador++;

      if (this.contador >= 500) {
        this.sonido.stopTenebroso();
        this.jugador.vidaActualJ = 100;
        this.enemigo.vidaActualE = 100;
        this.contador = 0;
        this.pantalla = 0;
    
        this.textoActual = 0;
        this.imagenActual = 0;
    
        this.estadoInstrucciones = false;
        this.instruccionesMostradas = false;
        this.estadoClick = true;
        this.estadoNarrando = false;
        this.estadoTexto = true;
    
        this.jugador.vidaActualJ = 100;
        this.enemigo.vidaActualE = 100;
        
        this.indice = 0;
        this.ytexto = 0;
        this.xtexto = -200;
        this.xtexto1 = 1000;
        this.contador = 0;
        
      }
      break;
      
    }
 }
 
  cargaImagenes(nombreArray, cantidad, ruta, tipoArchivo) {
    for ( let i = 0; i < cantidad; i++ ) {
      nombreArray.push( loadImage( ruta + i + tipoArchivo) );
    }
  }
  
  estaEnZona(zona, a) {
    return (((a - zona.inicio) % TWO_PI) + TWO_PI) % TWO_PI <= zona.ancho;
  }
  
  presionarMouse(){
    if (this.estadoClick) {
      if (this.maxTexto < this.dialogosPersonaje[this.textoActual].length) {
        this.estadoNarrando = true;
      } else {
        this.estadoNarrando = false;
      }
  
      if (this.estadoNarrando) {
        this.maxTexto = this.dialogosPersonaje[this.textoActual].length;
        this.opacidadBloque = 100;
        this.opacidadRectDialog = 200;
        this.opacidadTextoDialog = 255;
      } 
      else if (this.textoActual === 8 && !this.instruccionesMostradas) {
        this.estadoInstrucciones = true;
     
        if (mouseX > 310 && mouseY > 300 && mouseX < 490 && mouseY < 360) {
          this.sonido.playTerror();
          this.pantalla = 1;
          this.instruccionesMostradas = true;
        }
      }
      else if (this.textoActual === 11 || this.textoActual === 13) {
        this.estadoClick = false;
        this.estadoTexto = false;
      } 
      else {
        this.textoActual++
        this.maxTexto = 0;
      }
    }
    if(!this.estadoClick && this.opacidadRectDialog <= 0){
      if(this.textoActual === 9){
        this.pantalla = 1;
      }
      if(this.textoActual === 11 || this.textoActual === 13){
        this.sonido.playTenebroso();
        this.pantalla = 2;
      }
    }
    
    // Minijuego Logica
    
    if(this.pantalla === 1){
      for (let i = 0; i < this.zonas.length; i++) {
        if (this.estaEnZona(this.zonas[i], this.angulo)) {
          this.sonido.danioEnemigo();
          this.zonas.splice(i, 1);     // acierto: acá va tu interacción
          this.jugador.estadoSprites = 1;
          this.enemigo.reducirVida();
          this.velocidad *= 1.03;      // ejemplo: cada acierto acelera la barra
          return;
        }
      }
      
      // click fuera de zona = error
      this.sonido.danioJugador();
      this.jugador.reducirVida();
      this.jugador.estadoSprites = 2;
    }
  }
  
  cargarDialogo() {
    noStroke();
    fill(0, 0, 0, this.opacidadBloque);
    rect(0, 0, 800, 450);
    strokeWeight(3);
    stroke(180, 180, 180, this.opacidadRectDialog);
  
    // Este condicional alterna el uso del bloque de nombre de quien esta narrando, en caso de no ser una conversion y una narracion de accion de los personajes el bloque no se mostrara.
    if (this.estadoBloqueNombre) {
      fill(0, 0, 0, this.opacidadBloque);
      rect(25, 250, 120, 40, 20);
      textAlign(CENTER, CENTER);
      textSize(18);
      noStroke();
      fill(255, 255, 255, this.opacidadTextoDialog);
      text(this.personajes[this.personajeActual], 13, 245, 150, 50);
      stroke(180, 180, 180, this.opacidadRectDialog);
      fill(0, 0, 0, this.opacidadBloque);
    }
  
    rect(25, 305, 750, 130, 20);
    noStroke();
    fill(255, 255, 255, this.opacidadTextoDialog);
    textAlign(LEFT, CENTER);
    textSize(15);
  
    // Este condicional y variable lo coloque para resolver un error que me marcaba con el substring en consola al momento de pasar a un indice en el arreglo de dialogos que no contuviese nada.
    if (this.estadoTexto && this.pantalla === 0) {
      text(this.dialogosPersonaje[this.textoActual].substring(this.minTexto, this.maxTexto+=0.4), 48, 317, 710, 100);
    }
    textAlign(LEFT, BASELINE);
  }
  
  cargarInstrucciones(){
    noStroke();
    fill(0, 0, 0, this.opPanel);
    rect(0, 0, 800, 450);
    strokeWeight(3);
    stroke(180, 180, 180, this.opRectDialog);
    rect(25, 25, 750, 400, 20);
    noStroke();
    fill(224, 83, 83, this.opTextoDialog);
    textAlign(LEFT, CENTER);
    textSize(30);
    text("Cuidado!", 340, 100);
    fill(255, 255, 255, this.opTextoDialog);
    textAlign(LEFT, BASELINE);
    textSize(18);
    //rect(125, 145, 550, 250, 20);
    text(this.intrucciones, 155, 155, 500, 250);
    fill(this.colorBoton, this.opPanel);
    strokeWeight(2);
    stroke(180, 180, 180, this.opRectDialog);
    rect(310, 300, 180, 60, 20);
    noStroke();
    textAlign(LEFT, CENTER);
    fill(this.colorTextBtn, this.opTextoDialog);
    textSize(20);
    text("Jugar", 375, 328)
    textAlign(LEFT, BASELINE);
  }
  
  entradaInstrucciones() {
    if(this.estadoInstrucciones){
      if (this.opPanel <=100) {
        this.opPanel += 5;
      }
      if (this.opRectDialog <= 200) {
        this.opRectDialog += 3;
      }
      if (this.opTextoDialog <= 255) {
        this.opTextoDialog += 3;
      }
    }
  }
  
  entradaSalidaB(opcion) {
  
    switch(opcion) {
    case 0:
      if (this.opacidadBloque <=100) {
        this.opacidadBloque += 5;
      }
      if (this.opacidadRectDialog <= 200) {
        this.opacidadRectDialog += 3;
      }
      if (this.opacidadTextoDialog <= 255) {
        this.opacidadTextoDialog += 3;
      }
  
      break;
  
    case 1:
      if (this.opacidadTextoDialog >= 0) {
        this.opacidadTextoDialog -= 5;
      }
      if (this.opacidadRectDialog >= 0 ) {
        this.opacidadRectDialog -= 3;
      }
      if (this.opacidadBloque >= 0) {
        this.opacidadBloque -= 2;
      }
  
      break;
    }
  }
  
  creditos() {
    background(0);
  
    if (frameCount % 6 === 0) { //cambia las imagenes cada 6 frames
      this.indice = (this.indice + 1) % this.imagenesFuego.length;
    }
    image(this.imagenesFuego[this.indice], 0, 0, width, height);
  
    if (this.ytexto < 150) {
      this.ytexto += this.velocidadCreditos;
    }
  
    if (this.xtexto < 100) {
      this.xtexto += this.velocidadCreditos;
    }
  
    if (this.xtexto1 > 550) {
      this.xtexto1 -= this.velocidadCreditos;
    }
  
    fill(255);
    drawingContext.shadowBlur = 10; //intensidad del brillo
    drawingContext.shadowColor = 'red'; //Color del brillo
    textSize(64);
    text("Creditos", 300, this.ytexto);
    drawingContext.shadowColor = 'green'; //Color del brillo
    textSize(34);
    text("Lucas Liguori", this.xtexto, 250);
    drawingContext.shadowColor = 'Pink'; //Color del brillo
    text("Dylan Males", this.xtexto1, 250);
  }
  
  estaEnZona(zona, a) {
    // ¿el ángulo a cae dentro de la zona? (maneja el salto 2π -> 0)
    return (((a - zona.inicio) % TWO_PI) + TWO_PI) % TWO_PI <= zona.ancho;
}

  crearZona() {
  // aparece adelante de la barra para que no te agarre de golpe
    this.zonas.push({ inicio: this.angulo + random(1.2, TWO_PI - 1.2), ancho: 0.5, estabaAdentro: false });
}

  
}
