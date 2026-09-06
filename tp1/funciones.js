// Funciones Propias

function controlAnimacion(){
  if (ejecutarHasta(200)) {
    frameDozerJ = 7;
    moveMadotsuki(1, 325);
  } else if (ejecutarHasta(300)) {
    entradaSalidaNPC(0);
  } else if (ejecutarHasta(400)) {
    moveMadotsuki(0, 145);
  } else if (ejecutarHasta(1300)) {
    inicioDialogo(0, 1, "???", dialogoNPC);
  } else if (ejecutarHasta(1400)) {
    inicioDialogo(1, 1, "???", dialogoNPC);
  } else if (ejecutarHasta(1500)) {
    entradaSalidaNPC(1);
  } else if (ejecutarHasta(1575)) {
    estadosMad = 0;
  } else if (ejecutarHasta(1800)) {
    inicioDialogo(0, 0, "Madotsuki", dialogoMadotsuki);
  } else if (ejecutarHasta(1900)) {
    inicioDialogo(1, 0, "Madotsuki", dialogoMadotsuki);
  } else if (ejecutarHasta(2025)) {
    estadosDozer = 1;
    if (opacidadDozer < 175) {
      opacidadDozer += 0.5;
    }
    moveMadotsuki(1, 625);
    estadosMad = 1;
  } else if (ejecutarHasta(2100)) {
    estadosDozer = 2;
    jumpscareDozer();
  } else if (ejecutarHasta(2500)) {
    mensajeFinal(0);
  } else if (ejecutarHasta(3100)) {
    mensajeFinal(1);
    resetEscena();
  } else if (ejecutarApartirDe(3100)) {
    contadorProyecto = 0;
    opacidadBackF = 255;
    opacidadGodEye = 0;
    opacidadTextoF = 0;
    frameGodEye = 0;
  }
}


function cargaImagenes(nombreArray, cantidad, ruta, tipoArchivo) {
  for ( let i = 0; i < cantidad; i++ ) {
    nombreArray.push( loadImage( ruta + i + tipoArchivo) );
  }
}


// PPSD: Esta funcion la intente hacer reutilizable como la de cargar imagenes pero al intentarlo no salió como esperaba asi que no me rompi la cabeza y la deje como ya venia trabajando
function animacionFrames() {
  if ( millis() > contadorFramesNPC + 400 ) {
    frameNPC +=1;
    if (frameNPC > 3) {
      frameNPC = 0;
    }
    contadorFramesNPC = millis()
  }

  if ( millis() > contadorFramesNubes + 350 ) {
    frameNubes +=1;
    if (frameNubes > 3) {
      frameNubes = 0;
    }
    contadorFramesNubes = millis()
  }

  if ( millis() > contadorFramesMadotsukiP + 300 ) {
    frameMadotsukiP +=1;
    if (frameMadotsukiP > 11) {
      frameMadotsukiP = 8;
    }
    contadorFramesMadotsukiP = millis()
  }
  if ( millis() > contadorFramesMadotsukiD + 200 ) {
    frameMadotsukiD +=1;
    if (frameMadotsukiD > 3) {
      frameMadotsukiD = 0;
    }
    contadorFramesMadotsukiD = millis()
  }
  if ( millis() > contadorFramesMadotsukiI + 200 ) {
    frameMadotsukiI +=1;
    if (frameMadotsukiI > 7) {
      frameMadotsukiI = 4;
    }
    contadorFramesMadotsukiI = millis();
  }

  if ( millis() > contadorFramesDozerB + 250 ) {
    frameDozerB +=1;
    if (frameDozerB > 17) {
      frameDozerB = 12;
    }
    contadorFramesDozerB = millis();
  }

  if ( millis() > contadorFramesDozerD + 250 ) {
    frameDozerD +=1;
    if (frameDozerD > 5) {
      frameDozerD = 0;
    }
    contadorFramesDozerD = millis();
  }
  if (ejecutarApartirDe(2025)) {
    if ( millis() > contadorFramesDozerJ + 100 ) {
      frameDozerJ +=1;
      if (frameDozerJ > 10) {
        frameDozerJ = 10;
      }
      contadorFramesDozerJ = millis();
    }
  }
  if (ejecutarApartirDe(2115)) {
    if ( millis() > contadorGodEye + 300 ) {
      frameGodEye +=1;
      if (frameGodEye > 5) {
        frameGodEye = 0;
      }
      contadorGodEye = millis();
    }
  }
}


function mostrarDozer() {
  switch (estadosDozer) {
  case 0:
    image(spritesDozer[frameDozerB], 290, 115, 225, 225);
    break;

  case 1:
    image(spritesDozer[frameDozerD], 290, 115, 225, 225);
    break;

  case 2:
    image(spritesDozer[frameDozerJ], 290, 115, 225, 225);
    break;
  }
}


function mostrarMadotsuki() {
  switch (estadosMad) {
  case 0:
    image(spritesMadotsuki[frameMadotsukiP], posMadotsukiX, 355, 150, 150);
    break;

  case 1:
    image(spritesMadotsuki[frameMadotsukiD], posMadotsukiX, 360, 135, 135);
    break;

  case 2:
    image(spritesMadotsuki[frameMadotsukiI], posMadotsukiX, 360, 135, 135);
    break;

  case 3:
    image(spritesMadotsuki[6], posMadotsukiX, 360, 135, 135);
    break;
  }
}


function moveMadotsuki(lado, limiteMove) {
  switch(lado) {
  case 0:
    if (posMadotsukiX > limiteMove) {
      estadosMad = 2;
      posMadotsukiX -= 4;
      estadoIzquierda = true;
    } else {
      estadosMad = 3;
    }
    break;

  case 1:
    if (posMadotsukiX < limiteMove) {
      estadosMad = 1;
      posMadotsukiX += 4;
    } else {
      estadosMad = 0;
    }
    break;
  }
}


function entradaSalidaNPC(opcion) {
  switch(opcion) {
  case 0:
    if (opacidadNPC <= 90) {
      opacidadNPC += 2
    }
    break;

  case 1:
    if (opacidadNPC >= -1) {
      opacidadNPC -= 1
    }
    break;
  }
}


function inicioDialogo(opcion, alineacion, nombreTitulo, textoDialogo) {
  noStroke();
  fill(0, 0, 0, opacidadBack);
  rect(0, 0, 800, 600);
  strokeWeight(4);
  stroke(200, 200, 200, opacidadRect);
  rect(25, 350, 150, 50, 20);
  rect(25, 425, 750, 150, 20);
  noStroke();
  fill(255, 255, 255, opacidadTexto);
  textFont(fuenteTexto);
  textSize(25);
  textAlign(CENTER, CENTER);
  text(nombreTitulo, 25, 350, 150, 50);
  textSize(18);

  switch(alineacion) {
  case 0:
    textAlign(LEFT, CENTER);
    break;
  case 1:
    textAlign(CENTER, CENTER);
    break;
  }

  text(textoDialogo, 50, 445, 710, 100);
  textAlign(LEFT, BASELINE);

  switch(opcion) {
  case 0:
    if (opacidadBack <=100) {
      opacidadBack += 5;
    }
    if (opacidadRect <= 200) {
      opacidadRect += 3;
    }
    if (opacidadTexto <= 255) {
      opacidadTexto += 3;
    }

    break;

  case 1:
    if (opacidadTexto >= 0) {
      opacidadTexto -= 5;
    }
    if (opacidadRect >= 0 ) {
      opacidadRect -= 3;
    }
    if (opacidadBack >= 0) {
      opacidadBack -= 2;
    }

    break;
  }
}


function jumpscareDozer() {
  if (frameDozerJ > 9) {
    background(0);
    tint(255, 255);
    image(spritesDozer[11], 290, 115, 225, 225);
    textFont(fuenteTexto);
    textSize(75);
    fill(255, 255, 255, 215);
    if (cantidadTexto < 23) {
      cantidadTexto += 0.4;
    }
    for (let i = 0; i < cantidadTexto; i++) {
      posTextoX = posTextoXI + i * i/2
        posTextoY = posTextoYI - i * i/2
        text("No sos capaz!?", posTextoX, posTextoY)
    }
  }
}

function mensajeFinal(opcion) {
  fill(colorBackF, opacidadBackF);
  rect(0, 0, 800, 600);
  if (ejecutarApartirDe(2105)) {
    colorBackF = 255;
  }
  if (ejecutarApartirDe(2110)) {
    colorBackF = 0;
  }
  if (ejecutarApartirDe(2115)) {
    colorBackF = 255;
  }
  if (ejecutarApartirDe(2120)) {
    colorBackF = 0;
    tint(255, opacidadGodEye)
      image(spritesGodEye[frameGodEye], 335, 235, 135, 65);
    fill(255, 255, 255, opacidadTextoF)
      textSize(18);
    textAlign(CENTER, CENTER);
    text("Tragate tu orgullo o el te tragara a ti...", 280, 315, 250, 65);

    switch(opcion) {
    case 0:
      if (opacidadGodEye <= 255) {
        opacidadGodEye += 3;
      }
      if (opacidadTextoF <= 225) {
        opacidadTextoF += 1;
      }
      break;

    case 1:
      if (opacidadGodEye >= 0) {
        opacidadGodEye -= 4;
      }
      if (opacidadTextoF >= 0) {
        opacidadTextoF -= 3;
      }
      if (opacidadBackF >= 0) {
        opacidadBackF -= 1
      }
      break;
    }

    textAlign(LEFT, BASELINE);
    tint(255, 255);
  }
}

function ejecutarHasta(tiempo) {
  if (contadorProyecto < tiempo) {
    return true;
  } else {
    return false;
  }
}

function ejecutarApartirDe(tiempo) {
  if (contadorProyecto > tiempo) {
    return true;
  } else {
    return false;
  }
}


function resetEscena() {
  posMadotsukiX = -150;
  posTextoXI = 20;
  posTextoX = 0;
  posTextoYI = 575;
  posTextoY = 0;
  cantidadTexto = 1;
  estadosMad = 0;
  estadosDozer = 0;
  opacidadNPC = 0;
  opacidadRect = 0;
  opacidadTexto = 0;
  opacidadBack = 0;
  opacidadDozer = 100;
}
