

// Arrays de Imagenes
let spritesFondo = [];
let spritesNube1 = [];
let spritesNube2 = [];
let spritesNube3 = [];
let spritesNube4 = [];
let spritesNPC = [];
let spritesGodEye = [];
let spritesMadotsuki = [];
let spritesDozer = [];

// Variables de Frames
let frameNPC = 0;
let frameNubes = 3;
let frameMadotsukiP = 8;
let frameMadotsukiD = 0;
let frameMadotsukiI = 5;
let frameDozerB = 12;
let frameDozerD = 0;
let frameDozerJ = 7;
let frameGodEye = 0;

// Variables Contador
let contadorProyecto = 0;
let contadorFramesNPC = 0;
let contadorFramesNubes = 0;
let contadorFramesMadotsukiP = 0;
let contadorFramesMadotsukiD = 0;
let contadorFramesMadotsukiI = 0;
let contadorFramesDozerB = 0;
let contadorFramesDozerD = 0;
let contadorFramesDozerJ = 0;
let contadorGodEye = 0;

// Variable de Posición
let posMadotsukiX = -150;
let posTextoXI = 20;
let posTextoX = 0
let posTextoYI = 575;
let posTextoY = 0

let cantidadTexto = 1

// Variables de estado
let estadosMad = 0;
let estadosDozer = 0;

// Variables de Opacidad / Color
let opacidadNPC = 0;
let opacidadRect = 0;
let opacidadTexto = 0;
let opacidadBack = 0;
let opacidadDozer = 100;
let colorBackF = 0;
let opacidadBackF = 255;
let opacidadGodEye = 0;
let opacidadTextoF = 0;



// Variable de Fuente/Texto
let fuenteTexto;
let dialogoNPC = "Escorias... Solo piensan en su propio ego, creyendose victimas de este lugar. Les cuesta arrodillarse y ser expiados, o acaso su arrogancia les impide? Su orgullo es su propia perdicion";
let dialogoMadotsuki = "Huh? Sybau, bruh...";

function preload() {
  cargaImagenes(spritesFondo, 5, "assets/Sprite-Fondo0", ".png");
  cargaImagenes(spritesNPC, 4, "assets/Sprite-NPCPerfil", ".png");
  cargaImagenes(spritesNube1, 4, "assets/Sprite-Nube1-", ".png");
  cargaImagenes(spritesNube2, 4, "assets/Sprite-Nube2-", ".png");
  cargaImagenes(spritesNube3, 4, "assets/Sprite-Nube3-", ".png");
  cargaImagenes(spritesNube4, 4, "assets/Sprite-Nube4-", ".png");
  cargaImagenes(spritesMadotsuki, 12, "assets/Sprite-Madotsuki", ".png");
  cargaImagenes(spritesDozer, 18, "assets/Sprite-Dozer", ".png");
  cargaImagenes(spritesGodEye, 6, "assets/Sprite-GodEye", ".png");
  fuenteTexto = loadFont('/assets/alagard.ttf')
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  print(contadorProyecto);
  contadorProyecto +=1;

  animacionFrames();

  image(spritesFondo[0], 0, 0, 800, 600);

  tint(255, opacidadDozer);

  mostrarDozer();

  tint(255, 255);
  image(spritesFondo[3], 0, 0, 800, 600);
  image(spritesFondo[2], 0, 0, 800, 600);
  image(spritesFondo[1], 0, 0, 800, 600);

  image(spritesFondo[4], 0, 0, 800, 600);

  image(spritesNube1[frameNubes], -32, 101, 256, 100);
  image(spritesNube2[frameNubes], 610, 58, 250, 100);
  tint(255, 175);
  image(spritesNube3[frameNubes], 440, 139, 175, 75);
  tint(255, 150);
  image(spritesNube4[frameNubes], 247, 70, 175, 75);

  tint(255, opacidadNPC);
  image(spritesNPC[frameNPC], 70, 316, 150, 150);
  tint(255, 255);

  mostrarMadotsuki();
  
  controlAnimacion()

  textFont(fuenteTexto);
  textSize(20);
  fill(255);
  text(mouseX +", "+mouseY, mouseX, mouseY );
}


function keyPressed() {
  if (key === 'r' || key === 'R') {
    contadorProyecto = 0;
    frameDozerJ = 7;
    frameGodEye = 0;
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
    opacidadBackF = 255;
    opacidadGodEye = 0;
    opacidadTextoF = 0;
  }
}
