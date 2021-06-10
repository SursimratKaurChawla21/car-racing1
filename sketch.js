
var database
var form,player,game,gamestate=0,playercount=0



function setup(){
    database=firebase.database()
    createCanvas(500,500);
game= new Game()
game.getState()
game.start()
  

}

function draw(){
    background("white");
 
}

