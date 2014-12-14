function Location(name, descrip, items, position){
  this.name = name;
  this.description = function() {
    return descrip;
  }  
  this.items = items;
  this.position = map;
}

//Location.prototype.puzzle = function(){

//}
var map = [
  [0,1,1,0,0,0,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,1,0,0,0,0,1,0],
  [0,0,1,0,1,0,0,0,0,0],
  [0,0,0,1,0,1,0,0,0,0],
  [0,0,0,0,1,0,1,1,1,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,1,1],
  [1,0,1,0,0,1,0,1,0,0],
  [1,0,0,0,0,0,0,1,0,0]
];  
var entrance = new Location("Entrance", "The entrance to the castle, it is large and opulent. Well... it would have looked opulent if it wasn't in ruin.", ["glass shard","crystal doorknob","rock","brass arm"],map[0]);
var garden = new Location("Garden","You are in the garden, it is overgown and out of contol. It hasn't been maintained in quite some time.",["rose","hedge clippers","beehive"],map[1]);
var kitchen= new Location("Kitchen","This is the kitchen. It smells terrible and the room seems to be covered in mold. You can't brethe in here.",["mold","poisonous mold","old grease","fungi","chef's corpse"],map[2]);
var lounge = new Location("Lounge","A lounge room, it has couches, recliners, some chairs, and a fireplace. In the middle of the room there is a pile of human bones in a strange formation. In the center of the formation is a mysterious jewel.",["femur","skull","spine","bone marrow","Mystery Jewel","teeth"],map[3]);
var armory = new Location("Armory","The armory, a room full of rusted and out of date weapons and boxes full of damaged and mostly non functional munitions. Probably because of the hole in the roof.",["rusty revolver","rusted knife", "unstable flare", "broken flare gun", "bullets"],map[4]);
var monsterRoom = new Location("Monster Room","The room is destroyed and covered in blood with small bits of bone within it. This is where the moster kills and feasts upon its victims","",map[5]);
var theTower = new Location("The Tower","The Tower, it is clean and glowing white and has a welcoming and relaxing feeling while you are here. In the middle of the tower there is a pedestal with a light pouring down on to it." ,"",map[6]); //You don't want to have to go back in to the decrepid and dangerous castle.
var bedroom = new Location("Bedroom","This room used to be the bedroom of whomever used to live here or who might be currently living here. It is actually oranized and kept somewhat clean in contast to the rest of the ruined castle.","",map[7]);
var diningRoom = new Location("Dining Room","The","",map[8]);
var bathroom = new Location("Bathroom","","",map[9]);
var location = [entrance, garden, kitchen, lounge, armory, monsterRoom, theTower, bedroom, diningRoom, bathroom];
