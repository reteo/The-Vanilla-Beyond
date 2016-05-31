/* The warp arrow from Ropes+ may be an excellent way to get around, but
   seriously, stryker... OBSIDIAN?!  Nothing short of an ender pearl should
   be the key piece of the recipe!  Also, we only want this to make one
   arrow; one pearl, one arrow. */
   
removeRecipes( "RopesPlus:WarpArrow");
addShapedRecipe("RopesPlus:WarpArrow", [
  ["pearlEnder", null, null ],
  ["stickWood", null, null ],
  ["itemFeather", null, null ]]);
  
// While we're at it, let's add recipes for things that should have them.

// Why on EARTH does the saddle not have a recipe?!  It's NOT rocket science!
removeRecipes( "minecraft:saddle");
addShapedRecipe("minecraft:saddle", [
  ["materialLeather", "materialLeather", "materialLeather" ],
  ["materialLeather", "materialLeather", "materialLeather" ],
  ["ingotIron", null, "ingotIron" ]]);

// Same question for Horse Armor
removeRecipes( "minecraft:iron_horse_armor");
addShapedRecipe("minecraft:iron_horse_armor", [
  ["ingotIron", "ingotIron", "ingotIron"],
  ["ingotIron", "ingotIron", "ingotIron"],
  ["ingotIron", null, "ingotIron"]]);
  
removeRecipes( "minecraft:golden_horse_armor");
addShapedRecipe("minecraft:golden_horse_armor", [
  ["ingotGold", "ingotGold", "ingotGold"],
  ["ingotGold", "ingotGold", "ingotGold"],
  ["ingotGold", null, "ingotGold"]]);
  
removeRecipes( "minecraft:diamond_horse_armor"); 
addShapedRecipe("minecraft:diamond_horse_armor", [
  ["gemDiamond", "gemDiamond", "gemDiamond"],
  ["gemDiamond", "gemDiamond", "gemDiamond"],
  ["gemDiamond", null, "gemDiamond"]]);

