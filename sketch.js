var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// AA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacle1,obstacle2; // C41//AA
var cars = [];
var blastImage;                   //C42// AA
var semillas;

function preload() {
  backgroundImage = loadImage("./assets/track2.png");
  car1_img = loadImage("./assets/jugador1.png");
  car2_img = loadImage("./assets/player2e.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/monstruo1.png"); // Cambiar los obstaculos
  obstacle2Image = loadImage("./assets/monstruo2.png"); // Cambiar los obstaculos
  blastImage = loadImage("./assets/blast.png"); //C42 //AA.
  semillaImg = loadImage("./assets/semilla.webp"); //Agregar semilla 
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
