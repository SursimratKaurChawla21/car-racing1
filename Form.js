class Form{
    constructor (){

    }

    display(){
        var title = createElement("h2")
        title.html("car Racing")
        title.position (550,50)
        var input = createInput("enter your name to start")
        input.position(450,250)
        var button = createButton("start")
        button.position(500,300)
        var greet = createElement("h3")
        button.mousePressed(function(){input.hide()
        button.hide()
        var name = input.value()
        playercount+=1
        player.update(name)
        player.updateCount(playercount)
        greet.html("welcome   " +name)
        greet.position(450,250)


        })
        
        
        
    }
}