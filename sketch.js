var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
  
var car1Img, car2Img, car3Img, car4Img,track


function preload(){
  track=loadImage("images/Pool.png")
  car1Img=loadImage("images/swimmer.png")
  car2Img=loadImage("images/swimmer.png")
  car3Img=loadImage("images/swimmer.png")
  car4Img=loadImage("images/swimmer.png")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState=== 2){
  game.end();
  }
}
