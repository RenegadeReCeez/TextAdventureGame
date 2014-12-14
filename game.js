var player = {
  items: [],
  health: 2, 
  playerLocation: 1}
  
player.pickup = function(item) {
  for (var i = 0;location[player.playerLocation[i]]==item; i++) {
    this.items.push(item);
  }    
}
player.drop = function (item) {
    var position = this.items.indexOf(item);
    if (position >= 0) {
      this.items.splice(pos, 1);
  }   
}
player.hide = function() {
    var Hide = Math.random();
    return hide;
}
/*player.examine = function(room) {
    displayScene(room.items[]);
}
player.combine = function(item1,item2) {
  for(var i = 0; this.items[i] === item1; i++) {
    for(var a = 0; this.items[a] === item2; a++) {
      if()
    }
  }
}*/

var Start = function() {  
  var input = document.querySelector("input");
  input.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	    gameStep(this.value);
	  }
  });
}
var gameStep = function(string) {
	console.log("check");
	var cmd = interpret(string);
	var result = execute(cmd);
	report(result);
} 
var interpret = function(input){  
  var cmd =  {}; 
  var tokens = input.trim().toLowerCase().split(" ");
  cmd.action = tokens.shift();
  cmd.target = tokens.join(" ");
  return cmd;
}
var execute = function(command) {
  player[command.action](command.target);
  //var action = command.splice(0,0,'');
  //player.pickup(action);
}  
var report = function(result) {
	displayActions(result);
	displayInventory(result);
	displayScene(result);
}
function displayActions() {
  var field;
  var action;
  var actionList;
  actionList = document.querySelector("#help > ul");
  clearContent(actionList);
  for(field in player) {
    if (player[field] instanceof Function) {
      action = document.createElement("li");
      action.textContent = field;
      actionList.appendChild(action);
    }
  }
}      
function displayInventory() {
  var i;
  var item;
  var inventory;
  inventory = document.querySelector("#inventory > ul");
	clearContent(inventory);
	for(i in player.items) {
		item = document.createElement("li");
		item.textContent = player.items[i];
		inventory.appendChild(item);
	}
}	
function displayScene() {
  var i;
  var description;
  var	scene;
}  
function clearContent(thing) {
  thing.innerHTML='';
}
window.onload = Start;  