var monster = {
  health: 5,
  monsterLocation: 5}
var monsterActive = 0;  
var monsterAction = function() {
  if(monsterActive = 1) {  
    if(monster.health !== 0) {
      if (monster.monsterLocation = player.playerLocation) {
        var monsterAttackSearch = function() {  
          if (hide < 0.5) {
            player.health - 1;
            if (player.health = 0){
              document.getElementById("descrip").textContent = "You died at the hands of the monster. GAME OVER. Try again? refresh the page.";
            }
          }  
        }
      } else {  
        var monsterMove = function() {
          if(monster.monsterLocation !== player.playerLocation) {
            for(var i = 0; map[monsterLocation][i] = 1; i++) {
              monster.monsterLocation = map.indexOf(map[monsterLocation][i]);
            }
          }
        }
      }  
    }
  }
}
var hurtsMonster = ["glass shard","hedge clippers","femur","rusted knife","broken flare gun","the Holy Rocket Launcher","matches","razor blade", "rusty revolver", "poisonous mold"];   
