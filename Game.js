class Game{
constructor(){

}
getState(){
       database.ref("gameState").on("value",function(s){gamestate=s.val()})

}

writeState(g){
database.ref("/").update({gameState:g})
}

start(){
    if(gamestate===0){
        player=new Player()
        player.getCount()
        form = new Form ()
        form .display()
    }
}
}