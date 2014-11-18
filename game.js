var player = {
  items[], 
  player.pickup = function(item) {
    this.items.push(item);
  }
  player.drop = function (item) {
    var position = this.items.indexOf(item);
		if (position >= 0) {
			this.items.splice(pos, 1);
		}	  
  }
}  
var interpret = function(input){  
  var string = input.trim();
  var result = result.split(' ');
  return result;
}
var execute = function(command) {
  var action = command.splice(0,0,'');
  player.pickup(action);
}  
var report = function() {
	inventory = document.querySelector("#inventory > ul");
	for(var i; i <= player.items.length; i++) {
		inventory.innerHTML= inventory.innerHTML + player.items[i];
	}
}
var gameStep = function(string) {
	var cmd = interpret(string);
	var result = execute(cmd);
	report(result);
} 
var Start = function() {  
  var input = document.querySelector("action");
  input.addEventListener(keyUp, function(event) {
	  if (event.keyCode == 13) {
	    gameStep(this.value)
	  }
  });
}

window.onload = Start  