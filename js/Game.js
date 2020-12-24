class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(200,200);
    car3 = createSprite(300,200);
    car4 = createSprite(400,200);
    cars=[car1,car2,car3,car4]
  }
  play(){
    form.hide();
    textSize(15);
    text("Game Start",displayWidth/2-20,displayHeight/2-20);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
      //var display_position=130;
      var index=0;
      var x = 0;
      var y = 0;
      for (var plr in allPlayers) {
        if(plr==="player"+player.index)
          fill("red")
        else 
          fill("black")
          index = index+1
          x=x+200
          y = displayHeight-allPlayers[plr].distance;
          cars[index-1].x=x
          cars[index-1].y=y
          
          if(index===player.index){
            cars[index-1].shapeColor= 'red'
            camera.position.x=displayWidth/2
            camera.position.y = cars[index-1].y
          }
          //textSize(15)
          //text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,display_position)
        
    }
  }
  if(keyDown (UP_ARROW)&&player.index!==null){
    player.distance+=50
    player.update();
  }
}
}
