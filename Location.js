function Location(name, descrip, items, position, locked){
  this.name = name;
  this.description = descrip
  this.items = items;
  this.position = map;
  this.locked = locked
}
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
var entrance = new Location("Entrance", "The entrance to the castle, it is large and opulent. Well... it would have looked opulent if it wasn't in ruin.", ["glass shard","crystal doorknob","rock","brass arm"],map[0],0);
var garden = new Location("Garden","You are in the garden, it is overgown and out of contol. It hasn't been maintained in quite some time.",["rose","hedge clippers","beehive"],map[1],0);
var kitchen= new Location("Kitchen","This is the kitchen. It smells terrible and the room seems to be covered in mold. You can barely brethe in here. That might explain the corpse of what seems to be the chef.",["mold","poisonous mold","old grease","fungi","armory key"],map[2],0);
var lounge = new Location("Lounge","A lounge room, it has couches, recliners, some chairs, and a fireplace. In the middle of the room there is a pile of human bones in a strange formation. In the center of the formation is a mysterious jewel.",["femur","skull","spine","bone marrow","Mystery Jewel","teeth"],map[3],0);
var armory = new Location("Armory","The armory, a room full of rusted and out of date weapons and boxes full of damaged and mostly non functional munitions. Probably because of the hole in the roof.",["rusty revolver","rusted knife", "unstable flare","broken flare gun"],map[4],1);
var monsterRoom = new Location("Monster Room","The room is destroyed and covered in blood with small bits of bone within it. This is where the moster kills and feasts upon its victims",["flashlight"],map[5],0);
var theTower = new Location("The Tower","The Tower, it is clean and glowing white and has a welcoming and relaxing feeling while you are here. In the middle of the tower there is a pedestal with a light pouring down on to it." ,["cheese","The Holy Rocket Laucncher"],map[6],1); //You don't want to have to go back in to the decrepid and dangerous castle.
var bedroom = new Location("Bedroom","This room used to be the bedroom of whomever used to live here or who might be currently living here. It is actually oranized and kept somewhat clean in contast to the rest of the ruined castle.",["teddy bear","satanic worship fo dummies", "bathroom key"],map[7],0);
var diningRoom = new Location("Dining Room","The dining room has a large elongated table in the middle witha chandelier hanging over it. All are wrecked and ruined.",["untencils","candle","matches"],map[8],0);
var bathroom = new Location("Bathroom","This is the bathroom, nothing spetacular here except for the transdimensional portal eminating from the toilet.",["feces","toothbrush","razor blade"],map[9],1);
var roomLocation = ["entrance", "garden", "kitchen", "lounge", "armory", "monsterroom", "thetower", "bedroom", "diningroom", "bathroom"];
var whichRoom = function(Loc){
    var wantLoc;
    if (Loc == "entrance") {
      wantLoc = entrance;
    } else if (Loc == "garden") {
      wantLoc = garden;
    } else if (Loc == "kitchen") {
      wantLoc = kitchen;
    } else if (Loc == "lounge") {
      wantLoc = lounge;
    } else if (Loc == "armory") {
      wantLoc = armory;
    } else if (Loc == "monsterroom") {
      wantLoc = monsterRoom;
    } else if (Loc == "thetower") {
      wantLoc = theTower;
    } else if (Loc == "bedroom") {
      wantLoc = bedroom;
    } else if (Loc == "diningroom") {
      wantLoc = diningRoom;
    } else if (Loc == "bathroom") {
      wantLoc = bathroom;
    }
    return wantLoc;
}

