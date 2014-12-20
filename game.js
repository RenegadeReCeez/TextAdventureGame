
var Start = function() {  
  var input = document.querySelector("input");
  input.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	    gameStep(this.value);
      clearContent(input);
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
function displayScene(room) {
  var i;
  var description;
  var	scene;
  scene = document.querySelector("descrip");
  //console.log(scene);
  //clearContent(scene);
  for(i in room){
    description = document.createElement("li");
    description.textContent = room;
    scene.appendChild(description);
  }
}  
function clearContent(thing) {
  thing.innerHTML='';
}
var window = {};
window.onload = Start;  