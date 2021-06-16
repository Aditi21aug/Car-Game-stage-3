var gameState,playerCount 
var playerIndex
var allPlayers
var car1,car2,car3,car4;
var cars;

function setup()
{
  createCanvas(displayWidth,displayHeight)
  database = firebase.database();
  form = new Form()
  player = new Player()
  game = new Game()

  game.start()
}

function draw(){
  background("Yellow");
  
    if(playerCount === 4)
    {
        game.play()
    }
    drawSprites();
}

