//Lucas Liguori
//https://youtu.be/UHY535OtKAs

//Dylan Males
//https://youtu.be/X50NuqSqNHI


//Variable contador
let contador = 0;

//Variables de sonido
let sonidoFondo;
let sonidoBoton;
let sonidoT;

// Variables de Opacidad
let opacidadBloque = 0;
let opacidadRectDialog = 0;
let opacidadTextoDialog = 0;

let opacidadOpcionesoBack = 0;

let opacidadOpcionesTextoA = 0;
let opacidadOpcionesRectA = 0;
let opacidadOpcionesStrokeA = 0;

let opacidadOpcionesTextoB = 0;
let opacidadOpcionesRectB = 0;
let opacidadOpcionesStrokeB = 0;

// Variables de Estado
let estadoTexto = false; // (Experimental)

let estadoNarrando = false;
let estadoClick = false;
let estadoBloqueNombre = false;
let estadoOpciones = false;

// Variables de indices
let textoActual = 0;
let imagenActual = 0;
let personajeActual = 0;

// Variables de Texto/Parrafos
let minTexto = 0;
let maxTexto = 0;
let fuenteTexto;
let opcionesA = "";
let opcionesB = "";

// Variables Arreglo de Imagenes
let imagenesFondo = [];
let imagenesFuego = [];

// Otra variables
let pantalla = 0;
let indice = 0;
let ytexto = -50;
let xtexto = -100;
let xtexto1 = 750;
let velocidad = 2;

// Variables Arreglo de Texto
let personajes = [
  "", // Narrador
  "Detective",
  "Desconocido"
];

let dialogosPersonaje = [

  "La noche transcurre con normalidad. Pasas buena parte del dia con tu esposa. Para ti, es un alivio despues de haber culminado un caso agotador.",

  "O eso crees... Luego de revisar unos expedientes para la semana que viene, encuentras un articulo interesante sobre un foro frecuentado por usuarios peligrosos, algunos de los cuales terminan convirtiendose en criminales. Por mera curiosidad, entras a la web y revisas multiples publicaciones, hasta que una llama tu atencion.",

  "La publicacion es breve e inquietante. En ella aparecen fotografias de baja resolucion que muestran una zona oscura y algo peculiar, parecido a un brazo enterrado. El autor asegura tener un valioso 'premio' y afirma que cualquiera que se atreva a buscarlo tiene derecho a reclamarlo.",

  "Contactas con el usuario a traves del foro y solicitas participar en la busqueda. Poco despues, recibes un correo electronico con una respuesta. El remitente no revela su identidad y parece amistoso en cierto sentido.",

  "He leido tu mensaje. Asi que tienes curiosad sobre el 'premio'? Tengo la ubicacion de donde lo deje, y probablemente estare alli para entregartelo.",

  "Como se que no estas mintiendo, que dicho 'premio' es real?",

  "El premio es verdaderamente real y sera tuyo de verdad, siempre y cuando tu presencia sea la unica.",

  "Todavia quieres participar, o a este punto te acobardas?",

  "No tienes otra opcion que arriesgarte. Si este sujeto tiene en su posesion un posible cadaver que ofrece como 'premio', es razon suficiente para iniciar una investigacion.",

  "El lugar donde se encuentra el premio esta en las afueras de la ciudad. Recorre la carretera hasta llegar a un sendero que conduce al cementerio. Tu premio te espera alli dentro.",

  "Agarras el auto y te diriges al lugar, sin importar lo avanzada que este la noche. En el camino encuentras una estacion de servicio y aprovechas para detenerte.",

  "Te detienes en la estacion. No hay nada que llame especialmente tu atencion, aunque la ubicacion aislada hace que cualquier imprevisto pueda convertirse en un problema.",

  "Recuerdas los detalles del correo y compruebas la ruta en tu telefono. El cementerio queda a cierta distancia, al final de un camino rodeado de arboles. Desde que sales de casa, no recibes nuevas instrucciones ni mensajes.",

  "Antes de marcharte, recuerdas que necesitas comprar algun producto que pueda resultarte util en caso de emergencia.",

  "Te diriges al establecimiento y observas varios objetos en venta. Te preguntas si alguno podria resultarte util durante la investigacion.",

  "Compras la llave de ruedas y regresas con ella al vehiculo. Ahora tienes algo con que defenderte. Aun no sabes si la informacion del desconocido es autentica, pero ya has llegado demasiado lejos como para marcharte sin comprobarlo.",

  "Pones en marcha el vehiculo y continuas por la carretera. Cuando encuentras el acceso al sendero, estacionas fuera del camino y te preparas para recorrer a pie el ultimo tramo hasta el cementerio.",

  "Avanzas por el sendero, atento a las irregularidades del terreno. La decision de acudir es tuya y no tiene sentido fingir que no has considerado los riesgos. Aun asi, esperas que el desconocido tenga una explicacion razonable para haber elegido aquel lugar.",

  "El cementerio aparece entre los arboles unos minutos despues. La verja principal parece atascada debido al deterioro del metal, pero consigues abrirla con cierta dificultad.",

  "En cuanto cruzas en busca del 'premio', decides buscar por cada rincon del lugar.",

  "Tras no encontrar nada, piensas que te han gastado una broma, hasta que escuchas a alguien acercarse. Un hombre cuyo rostro no consigues distinguir debido a la oscuridad camina hacia ti.",

  "De verdad llegaste, realmente te atreviste a venir a buscar el 'premio'...",

  "Crees que esto es alguna especie de broma!?",

  "Te alteras y levantas la llave para amenazarlo, pero no cuentas con que el sujeto saque un arma. Antes de que puedas reaccionar, te dispara y caes al suelo, retorciendote de dolor.",

  "Aturdido por el dolor, apenas consigues distinguir lo que te rodea. Sin embargo, alcanzas a ver como el sujeto se acerca a ti con una sonrisa. Es lo ultimo que recuerdas antes de perder el conocimiento.",

  "Decides entregar los mensajes a las autoridades antes de avanzar por tu cuenta. Explicas que sospechas de un usuario anonimo que podria estar exponiendo en internet el cadaver de una de sus victimas.",

  "La denuncia queda registrada, pero la informacion disponible no basta para identificar al remitente. Ademas, dejas una copia de los correos, convencido de haber tomado la decision mas prudente.",

  "Regresas tranquilamente a casa, pero notas que algo anda mal. Al entrar, te recibe un silencio inquietante.",

  "Recorres rapidamente la casa en busca de tu esposa. Durante varios minutos no consigues encontrarla, hasta que subes al atico y descubres su cuerpo desplomado en el suelo.",

  "Intentas hacer que se levante, pero al sujetar su cuerpo descubres que tienes las manos cubiertas de sangre.",

  "Gritas y te desplomas hacia atras, horrorizado. Al caer boca arriba, notas un papel en la puerta con una frase escrita a mano: 'Ella no merecia esto pero tu lo permitiste, Detective'.",

  "Regresas al vehiculo con el combustible. Compruebas que tienes todo lo necesario y emprendes el tramo final del viaje. Todavia no sabes si la informacion del desconocido es autentica, pero ya has llegado demasiado lejos como para marcharte sin comprobarlo.",

  "La carretera se estrecha a medida que te alejas de la ciudad. Finalmente, encuentras el acceso al sendero mencionado en el correo. Dejas el vehiculo en un lugar apartado y te adentras en el bosque.",

  "El sendero esta cubierto de hojas y apenas recibe luz de la carretera. Avanzas con cuidado, procurando no perder de vista el camino. A medida que te adentras en el bosque, el ruido de los vehiculos desaparece hasta dar paso al silencio.",

  "Al llegar a una bifurcacion, reconoces la ruta que has consultado antes de salir. Uno de los caminos conduce a la entrada principal del cementerio; el otro rodea parte de los terrenos y parece llevar a una zona oscura.",

  "Fuerzas la puerta para abrirla y esta produce un chirrido agudo.",

  "En cuanto cruzas en busca del 'premio', comienzas a buscar por cada rincon del lugar con la llave en la mano para protegerte. Tras no encontrar nada, piensas que todo ha sido una broma de ese usuario, hasta que escuchas el chirrido de una puerta y unos pasos que se aproximan.",

  "De verdad llegaste, realmente te atreviste a venir a buscar el 'premio'... Mira, esta por alli dentro del ataud que esta detras de ti.",

  "Te das la vuelta y te diriges hacia el ataud que te indica. Mientras intentas abrirlo, una brisa fria te recorre el cuerpo. Antes de que puedas reaccionar, una sombra se cierne sobre ti. En un abrir y cerrar de ojos, el sujeto aparece justo detras de ti.",

  "Un miedo profundo te invade y sientes un intenso dolor en la cabeza. Tus sentidos comienzan a fallarte y, antes de que puedas reaccionar, caes desplomado al suelo.",

  "Aturdido por el dolor, apenas consigues ver lo que sucede a tu alrededor. La figura se acerca lentamente y, con cada segundo que pasa, distingues mejor su rostro sonriente, hasta que finalmente pierdes el conocimiento.",

  "Tomas el otro camino, que te conduce a una zona oscura del cementerio. Alli encuentras un acceso por el que puedes entrar con facilidad.",

  "Por seguridad, decides rociar combustible en algunas zonas del lugar, reservandote la posibilidad de recurrir a el en caso de una emergencia extrema.",

  "Una vez vaciado el recipiente de combustible, lo ocultas y comienzas a investigar el lugar.",

  "De pronto, escuchas el chirrido de una puerta. Un sujeto se acerca lentamente.",

  "Eres tu quien a quien contacte?!",

  "De verdad llegaste, realmente te atreviste a venir a buscar el 'premio'... Mira, esta por alli dentro del ataud que esta detras de ti.",

  "Antes de darte la vuelta para mirar hacia donde te indica, la luz de la luna te permite distinguir algo inquietante: el sujeto oculta un arma.",

  "Te das la vuelta con tranquilidad, pero te quedas inmovil frente al ataud.",

  "De pronto, sientes como el sujeto se acerca...",

  "Reaccionas rapidamente, lo desarmas y haces que suelte el arma. Aprovechas el momento para sacar tu encendedor, el que siempre llevas contigo para fumar, y prendes fuego al lugar.",

  "El sujeto intenta aferrarse a ti, pero lo pateas con suficiente fuerza para aturdirlo. Aprovechas la oportunidad y corres con todas tus fuerzas hasta alejarte de la zona.",

  "Consigues escapar con vida, pero el fuego consume lo que podria haber sido una prueba fundamental: la escena del crimen. Al menos sigues vivo."
];

function preload() {
  cargaImagenes(imagenesFondo, 13, "/assets/Fondo", ".png");
  cargaImagenes(imagenesFuego, 5, "/assets/Fuego", ".png");
  fuenteTexto = loadFont('/assets/alagard.ttf');
  sonidoFondo = loadSound('/assets/Ambiente.wav');
  sonidoBoton = loadSound('/assets/ActionBoton.wav');
  sonidoT = loadSound('/assets/Tenebroso.wav');
}

function setup() {
  createCanvas(800, 450);
  estadoTexto = true;
  estadoClick = true;
  maxTexto = 0;
}


function draw() {
  background(0);
  image(imagenesFondo[imagenActual], 0, 0, 800, 450);
  textFont(fuenteTexto);

  switch (pantalla) {
    case 0:
      inicio();
      break;

    case 1:
      cargarDialogo();
      cargarOpciones();
      if (textoActual === 0) {
        personajeActual = 0;
        entradaSalidaB(0);
      }
      if (textoActual === 1) {
        imagenActual = 5;
      }
      if (textoActual === 4) {
        estadoBloqueNombre = true;
        personajeActual = 2;
      }
      if (textoActual === 5) {
        personajeActual = 1;
      }
      if (textoActual === 6) {
        personajeActual = 2;
      }
      if (textoActual === 7) {
        opcionesA = "Informar a la Policia";
        opcionesB = "Proceder";
        personajeActual = 2;
        entradaSalidaB(0);
      }
      if (textoActual === 9) {
        estadoBloqueNombre = true;
        personajeActual = 2;
      }
      if (textoActual === 10) {
        estadoBloqueNombre = false;
        imagenActual = 1;
      }
      if (textoActual === 14) {
        opcionesA = "Comprar una Llave";
        opcionesB = "Comprar Gasolina";
      }
      if (textoActual === 17) {
        imagenActual = 4;
      }
      if (textoActual === 18) {
        imagenActual = 2;
        opcionesA = "Forzar la Entrada Principal";
        opcionesB = "Rodear el Cementerio";
      }
      if (textoActual === 21) {
        estadoBloqueNombre = true;
        personajeActual = 2;
      }
      if (textoActual === 22) {
        personajeActual = 1;
      }
      if (textoActual === 23) {
        estadoBloqueNombre = false;
      }
      if (textoActual === 24) {
        imagenActual = 10;
      }
      if (textoActual === 25) {
        imagenActual = 3;
      }
      if (textoActual === 27) {
        imagenActual = 0;
      }
      if (textoActual === 29) {
        imagenActual = 6;
      }
      if (textoActual === 33) {
        imagenActual = 4;
      }
      if (textoActual === 34) {
        imagenActual = 2;
        opcionesA = "Forzar la Entrada Principal";
        opcionesB = "Rodear el Cementerio";
      }
      if (textoActual === 36 || textoActual === 19 || textoActual === 42) {
        imagenActual = 11;
      }
      if (textoActual === 37) {
        estadoBloqueNombre = true;
        personajeActual = 2;
      }
      if (textoActual === 38) {
        estadoBloqueNombre = false;
      }
      if (textoActual === 40) {
        imagenActual = 10;
      }
      if (textoActual === 45) {
        estadoBloqueNombre = true;
        personajeActual = 1;
      }
      if (textoActual === 46) {
        personajeActual = 2;
      }
      if (textoActual === 47) {
        estadoBloqueNombre = false;
      }
      if (textoActual === 50) {
        imagenActual = 9;
      }
      if (textoActual === 51) {
        imagenActual = 7;
      }
      if (textoActual === 52) {
        imagenActual = 8;
      }

      if (estadoOpciones) {
        entradaSalidaO(0);
        if (mouseX > 175 && mouseY > 140 && mouseX < 625 && mouseY < 180) {
          opacidadOpcionesRectA = 75;
          opacidadOpcionesStrokeA = 125;
          opacidadOpcionesTextoA = 150;
        } else {
          opacidadOpcionesRectA = 150;
          opacidadOpcionesStrokeA = 200;
          opacidadOpcionesTextoA = 255;
        }
        if (mouseX > 175 && mouseY > 210 && mouseX < 625 && mouseY < 250) {
          opacidadOpcionesRectB = 75;
          opacidadOpcionesStrokeB = 125;
          opacidadOpcionesTextoB = 150;
        } else {
          opacidadOpcionesRectB = 150;
          opacidadOpcionesStrokeB = 200;
          opacidadOpcionesTextoB = 255;
        }
      }

      if (!estadoClick) {
        entradaSalidaB(1);
      }
      break;

    case 2:
      creditos();
      break;
  }
  if (pantalla === 2){
    contador+=1;
    if(contador > 500){
      sonidoT.stop();
      contador = 0;
      pantalla = 0;
      estadoTexto = true;
      estadoClick = true;
      textoActual = 0;
      imagenActual = 0;
      personajeActual = 0;
      opacidadBloque = 0;
      opacidadRectDialog = 0;
      opacidadTextoDialog = 0;
      opacidadOpcionesoBack = 0;
      opacidadOpcionesTextoA = 0;
      opacidadOpcionesRectA = 0;
      opacidadOpcionesStrokeA = 0;
      opacidadOpcionesTextoB = 0;
      opacidadOpcionesRectB = 0;
      opacidadOpcionesStrokeB = 0;
      ytexto = -50;
      xtexto = -100;
      xtexto1 = 750;
       
    }
  }
}

function mousePressed() {
  if (pantalla === 0) {
    pantalla = 1;
    maxTexto = 0
    textoActual = 0
    sonidoFondo.loop();
  }
  if (estadoClick) {
    if (maxTexto < dialogosPersonaje[textoActual].length) {
      estadoNarrando = true;
    } else {
      estadoNarrando = false;
    }

    if (estadoNarrando) {
      maxTexto = dialogosPersonaje[textoActual].length;
      opacidadBloque = 100;
      opacidadRectDialog = 200;
      opacidadTextoDialog = 255;
    } else if (textoActual === 7) {
      //Opciones Pantalla 7
      if (!estadoNarrando) {
        estadoOpciones = true;
      }

      if (estadoOpciones) {
        if (mouseX > 175 && mouseY > 140 && mouseX < 625 && mouseY < 180) {
          entradaSalidaO(1);
          estadoOpciones = false;
          textoActual = 25;
          maxTexto = 0;
          estadoClick = true;
          estadoTexto = true;
          estadoBloqueNombre = false;
          sonidoBoton.play();
        }
        if (mouseX > 175 && mouseY > 210 && mouseX < 625 && mouseY < 250) {
          entradaSalidaO(1);
          estadoOpciones = false;
          textoActual = 8;
          maxTexto = 0;
          estadoClick = true;
          estadoTexto = true;
          estadoBloqueNombre = false;
          sonidoBoton.play();
        }
      }
    } else if (textoActual === 14) {
      //Opciones Pantalla 14
      if (!estadoNarrando) {
        estadoOpciones = true;
      }
      if (mouseX > 175 && mouseY > 140 && mouseX < 625 && mouseY < 180) {
        entradaSalidaO(1);
        estadoOpciones = false;
        textoActual = 15;
        maxTexto = 0;
        estadoClick = true;
        estadoTexto = true;
        estadoBloqueNombre = false;
        sonidoBoton.play();
      }
      if (mouseX > 175 && mouseY > 210 && mouseX < 625 && mouseY < 250) {
        entradaSalidaO(1);
        estadoOpciones = false;
        textoActual = 31;
        maxTexto = 0;
        estadoClick = true;
        estadoTexto = true;
        estadoBloqueNombre = false;
        sonidoBoton.play();
      }
    } else if (textoActual === 34) {
      //Opciones Pantalla 34
      if (!estadoNarrando) {
        estadoOpciones = true;
      }
      if (mouseX > 175 && mouseY > 140 && mouseX < 625 && mouseY < 180) {
        entradaSalidaO(1);
        estadoOpciones = false;
        textoActual = 35;
        maxTexto = 0;
        estadoClick = true;
        estadoTexto = true;
        estadoBloqueNombre = false;
        sonidoBoton.play();
      }
      if (mouseX > 175 && mouseY > 210 && mouseX < 625 && mouseY < 250) {
        entradaSalidaO(1);
        estadoOpciones = false;
        textoActual = 41;
        maxTexto = 0;
        estadoClick = true;
        estadoTexto = true;
        estadoBloqueNombre = false;
        sonidoBoton.play();
      }
    } else if (textoActual === 30 || textoActual === 24 || textoActual === 40 || textoActual === 52) {
      estadoClick = false;
      estadoTexto = false;
    } else {
      textoActual++
        maxTexto = 0;
    }
  }
  if(!estadoClick && opacidadRectDialog <= 0){
    if(textoActual === 30 || textoActual === 24 || textoActual === 40 || textoActual === 52){
      sonidoFondo.stop();
      sonidoT.loop();
      pantalla = 2;
    }
  }
}

function cargaImagenes(nombreArray, cantidad, ruta, tipoArchivo) {

  for ( let i = 0; i < cantidad; i++ ) {
    nombreArray.push( loadImage( ruta + i + tipoArchivo) );
  }
}

function cargarDialogo() {

  noStroke();
  fill(0, 0, 0, opacidadBloque);
  rect(0, 0, 800, 450);
  strokeWeight(3);
  stroke(180, 180, 180, opacidadRectDialog);

  // Este condicional alterna el uso del bloque de nombre de quien esta narrando, en caso de no ser una conversion y una narracion de accion de los personajes el bloque no se mostrara.
  if (estadoBloqueNombre) {
    fill(0, 0, 0, opacidadBloque);
    rect(25, 250, 120, 40, 20);
    textAlign(CENTER, CENTER);
    textSize(18);
    noStroke();
    fill(255, 255, 255, opacidadTextoDialog);
    text(personajes[personajeActual], 13, 245, 150, 50);
    stroke(180, 180, 180, opacidadRectDialog);
    fill(0, 0, 0, opacidadBloque);
  }

  rect(25, 305, 750, 130, 20);
  noStroke();
  fill(255, 255, 255, opacidadTextoDialog);
  textAlign(LEFT, CENTER);
  textSize(15);

  // Este condicional y variable lo coloque para resolver un error que me marcaba con el substring en consola al momento de pasar a un indice en el arreglo de dialogos que no contuviese nada.
  if (estadoTexto && pantalla === 1) {
    text(dialogosPersonaje[textoActual].substring(minTexto, maxTexto+=0.4), 48, 317, 710, 100);
  }
  textAlign(LEFT, BASELINE);
}



function entradaSalidaB(opcion) {

  switch(opcion) {
  case 0:
    if (opacidadBloque <=100) {
      opacidadBloque += 5;
    }
    if (opacidadRectDialog <= 200) {
      opacidadRectDialog += 3;
    }
    if (opacidadTextoDialog <= 255) {
      opacidadTextoDialog += 3;
    }

    break;

  case 1:
    if (opacidadTextoDialog >= 0) {
      opacidadTextoDialog -= 5;
    }
    if (opacidadRectDialog >= 0 ) {
      opacidadRectDialog -= 3;
    }
    if (opacidadBloque >= 0) {
      opacidadBloque -= 2;
    }

    break;
  }
}

function entradaSalidaO(opcion) {

  switch(opcion) {
  case 0:
    if (opacidadOpcionesoBack <=125) {
      opacidadOpcionesoBack += 5;
    }
    if (opacidadOpcionesRectA <= 150) {
      opacidadOpcionesRectA += 3;
      opacidadOpcionesRectB += 3;
    }
    if (opacidadOpcionesStrokeA <= 200) {
      opacidadOpcionesStrokeA += 3;
      opacidadOpcionesStrokeB += 3;
    }
    if (opacidadOpcionesTextoA <= 255) {
      opacidadOpcionesTextoA += 3;
      opacidadOpcionesTextoB += 3;
    }

    break;

  case 1:
    opacidadOpcionesoBack = 0;
    opacidadOpcionesRectA = 0;
    opacidadOpcionesStrokeA = 0;
    opacidadOpcionesTextoA = 0;

    opacidadOpcionesRectB = 0;
    opacidadOpcionesStrokeB = 0;
    opacidadOpcionesTextoB = 0;
    break;
  }
}
function cargarOpciones() {

  fill(0, opacidadOpcionesoBack);
  rect(0, 0, 800, 600);
  fill(0, opacidadOpcionesRectA);
  strokeWeight(2.5);
  stroke(180, 180, 180, opacidadOpcionesStrokeA);
  textAlign(CENTER, CENTER);
  rect(175, 140, 450, 40, 5);
  noStroke();
  fill(255, opacidadOpcionesTextoA);
  text(opcionesA, 175, 140, 450, 40);

  fill(0, opacidadOpcionesRectB);
  stroke(180, 180, 180, opacidadOpcionesStrokeB);
  rect(175, 210, 450, 40, 5);
  noStroke();
  fill(255, opacidadOpcionesTextoB);
  text(opcionesB, 175, 210, 450, 40);
  textAlign(LEFT, BASELINE);
}

function inicio() {
  image(imagenesFondo[12], 0, 0, 800, 450);
  textSize(60);
  fill(255);
  // para configurar las propiedades del brillo
  drawingContext.shadowBlur = 15; //intensidad del brillo
  drawingContext.shadowColor = 'red'; //Color del brillo

  text("Sonrie Detective", 175, 150);

  drawingContext.shadowColor = 'black'; //Color del brillo
  textSize(32);
  fill(0, 0, 0);
  if (frameCount % 60 < 30) { // el texto se muestra 30 frames si y 30 no
    text("Empezar", 330, 250);
  }
  drawingContext.shadowBlur = 0; // para termina el efecto
}

function creditos() {
  background(0);

  if (frameCount % 6 === 0) { //cambia las imagenes cada 6 frames
    indice = (indice + 1) % imagenesFuego.length;
  }
  image(imagenesFuego[indice], 0, 0, width, height);

  if (ytexto < 150) {
    ytexto += velocidad;
  }

  if (xtexto < 100) {
    xtexto += velocidad;
  }

  if (xtexto1 > 550) {
    xtexto1 -= velocidad;
  }

  fill(255);
  drawingContext.shadowBlur = 10; //intensidad del brillo
  drawingContext.shadowColor = 'red'; //Color del brillo
  textSize(64);
  text("Creditos", 300, ytexto);
  drawingContext.shadowColor = 'green'; //Color del brillo
  textSize(34);
  text("Lucas Liguori", xtexto, 250);
  drawingContext.shadowColor = 'Pink'; //Color del brillo
  text("Dylan Males", xtexto1, 250);
}
