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