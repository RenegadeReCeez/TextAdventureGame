var player = ( items[] );
player.pickup = function(item) {
  this.items.push(item)
}
var interpret = function(input){  
  var string = input.trim();
  var result = result.split(' ');
  return result;
}
var execute = function(array) {
  var action = array.splice(0,0,'');
  player.pickup(action);
}  
var report = function() {
	inventory = document.querySelector("#inventory > ul");
	for(var i; i <= player.items.length; i++) {
		inventory.innerHTML= inventory.innerHTML + player.items[i];
	}
}
var gameStep = function(string) {
	interpret(string);
	execute(string);
	report();
} 
var input = document.querySelector("action");
input.addEventListener(keyUp, function(event) {
	if (event.keyCode == 13) {
		var cmd = interpret(this.value);
		execute(cmd);
		report();
	}
});