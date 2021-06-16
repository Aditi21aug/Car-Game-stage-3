class Player
{
    constructor()
    {
        this.index = 0;
        this.name = '';
        this.distance = 0;
    }

    update()
    {
        database.ref('/').update({playerCount:playerCount})
    }

    getCount()
    {
        var databaseref = database.ref('playerCount')
        databaseref.on("value",function(data){
            playerCount = data.val()
        })
    }

    updatePlayer()
    {
        playerIndex = 'players/player' + this.index
        database.ref(playerIndex).set({name:this.name,distance:this.distance})
    }

    getPlayerInfo()
    {
        var databaseref = database.ref('players')
        databaseref.on("value",function(data){
            allPlayers = data.val()
        })
    }
}