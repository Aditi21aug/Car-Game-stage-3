class Game
{
   constructor()
   {

   }

   start()
   {
      player.getCount()
      form.display()
      car1 = createSprite(200,300)
      car2 = createSprite(400,300)
      car3 = createSprite(600,300)
      car4 = createSprite(800,300)
      cars = [car1,car2,car3,car4]
   }

   play()
   {
       form.hide()
       textSize(40)
       text("Game Started",400,100);
       var x = 200
       var y = 0
       player.getPlayerInfo()
       var index = 0
       for(var plr in allPlayers)
         {
          x = x + 200
          index = index+1
          y = displayHeight - allPlayers[plr].distance
          cars[index-1].x = x
          cars[index-1].y = y
          if(index === player.index)
          {
             cars[index-1].shapeColor = "red"
             camera.position.x = displayWidth/2
             camera.position.y = cars[index-1].y
          }

         }

      if(keyDown(UP_ARROW))
      {
         player.distance = player.distance+50
         player.updatePlayer();
      }
       
   }
   
}