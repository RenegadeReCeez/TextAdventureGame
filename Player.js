var player = {
  items: ["pencil"],
  health: 2, 
  playerLocation: 1}
  
player.pickup = function(item) {
  var Loc = whichRoom(roomLocation[player.playerLocation]);
  var here = Loc.items.indexOf(item);   
  if (here >= 0) {     
    this.items.push(item);  
    Loc.items.splice(here,1);
  } else {
    alert("sorry, that item isn't here for you to pickup.");
  }
   
}
player.drop = function (item) {
  var position = this.items.indexOf(item);
  var Loc = whichRoom(roomLocation[player.playerLocation]);
  if (position >= 0) {
    this.items.splice(position, 1);
    Loc.items.push(item);
  } else {
    alert("sorry, you dont havr this item to drop.");
  } 
}
player.hide = function() {
    var hide = Math.random();
    return hide;
    monsterAction();
}
player.goto = function(wantLoc) { 
  var nextLoc = roomLocation.indexOf(wantLoc);
  var Loc = whichRoom(roomLocation[player.playerLocation]);
  if (map[player.playerLocation][nextLoc]===1) {
    if (Loc.locked === 0) {  
      player.playerLocation = nextLoc;
      wantLoc = whichRoom(wantLoc);
      if (monster.monsterLocation === player.playerLocation) {
        document.getElementById("descrip").textContent = "The monster is in the room with you." + wantLoc.description;
      } else {
        document.getElementById("descrip").textContent = wantLoc.description
      }
      monsterAction();
      if (monsterActive !== 1) {
        activation(); 
      } 
    } else {
      alert("sorry, the door is locked and you need the key.");
    } 
  } else {
    alert("sorry, that's not possible.");
  }
}
player.examine = function() {
  var Loc = whichRoom(roomLocation[player.playerLocation]);
  var items = Loc.items;
  document.getElementById("descrip").textContent = "You see there is " + items;
}
player.use = function(item) {
  var position = this.items.indexOf(item);
  var Loc = whichRoom(roomLocation[player.playerLocation]);
  if (position >= 0) {
    if (item = "flashlight") {
      document.getElementById("descrip").textContent = "You turn on the flashlight and can see the rooms better.";
    } else if (item = "matches") {
      document.getElementById("descrip").textContent = "You try to light some matches and after a couple one finally lights up. This provides you with some light in the dark castle.";
    } else {
      document.getElementById("descrip").textContent = "You think of using this item but after further thought you realize that would be a good idea.";
    }
  }  
}
player.unlock = function(wantLoc) {
  var nextLoc = roomLocation.indexOf(wantLoc);
  var armkey = this.items.indexOf("armory key");
  var bthrmkey = this.items.indexOf("bathroom key");
  var twrkey = this.items.indexOf("the tower key");
  if (map[player.playerLocation][nextLoc]===1) {
    if (nextLoc = "armory") {
      if (armkey >= 0) {
        nextLoc.locked = 0;
      } 
    } else if (nextLoc = "the tower") {
      if (bthrmkey >= 0) {
        nextLoc.locked = 0;
      }
    } else if (nextLoc = "bathroom") {
      if (twrkey >= 0) {
        nextLoc.locked = 0;
      }
    }
  } 
}
player.fight = function(item){
  var position = this.items.indexOf(item);
  var Loc = whichRoom(roomLocation[player.playerLocation]);
  if (position >= 0) {
    if (monster.monsterLocation === player.playerLocation) {
      if (hurtsMonster.indexOf(item) >= 0) {
        this.items.splice(position, 1);
        monster.health = monster.health -1;
        if (monster.health === 0) {
          monsterActive = 0
          Loc.items.push("theTower key");
        }
      } else {
        alert("that doesn't hurt the monster, it only angers him.")
        monsterAction();
      }
    } else{
      alert("the monster isn't here for you to atack him.")
    }
  }   
}
player.help = function () {
  document.getElementById("descrip").textContent = "there are ten locations entrance, garden, kitchen, lounge, armory, monster room, the tower, bedroom, dining room, and bathroom. Pickup, drop, use and fight has you using your items. use is for non combat purposes and fight is for fighting the monster with your collected items."; 
}
player.help2 = function() {
  document.getElementById("descrip").textContent = "help2 because help was too long. examine lets you see what items are in the room. If the monster is in the room you could hide instead of fighting or moving to a differnet room. Unlock unlocks locked doors if you have the correct key to the door.";
}
player.objective = function(){
  document.getElementById("descrip").textContent = "Your objective is to survive and figure out why your are here by exploring this castle. ";
}
var activation = function() {
  if (monster.health > 0) {
    if (playerLocation = 5) {
      monsterActive = 1; 
    }
  }  
}