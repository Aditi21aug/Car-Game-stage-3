class Form
{
    constructor()
    {
        this.title = createElement('h1').html("Car Game")
        this.input = createInput('')
        this.button = createButton('Play')
        this.greeting = createElement('h2')
    }

    display()
    {
        this.title.position(800,10)
        this.input.position(400,300)
        this.button.position(600,300)
        this.greeting.position(400,200)
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.greeting.html("Welcome " + this.input.value())
            playerCount = playerCount + 1
            player.update()
            player.index = playerCount;
            player.name  = this.input.value()
            player.updatePlayer();
        })
       
    }

    hide()
    {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}