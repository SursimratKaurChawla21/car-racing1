class Player {
    constructor(){}
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playercount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
    update(name){
      var index = "player"+playercount
      database.ref(index).set({name:name})
    }
}