// Generic templates
// NOTE: These are REQUIRED for addMetalBlock() and addMetalIngot() to work!
addBlock("blockMetalGeneric", "MetalBlock", 10.0, 10.0, "pickaxe", 1, "iron", "ExpandedMining.general");
addItem("ingotGeneric", "IngotGeneric", 64, "ExpandedMining.general");

// ----------------------------------------------------------------------------- //


// Metal and block and ingot creation.
// This loop does not create ores, since it also includes alloy metals.
var metals = ["Steel",
              "Aluminum",
              "Copper",
              "Tin",
              "Bronze",
              "Nickel",
              "Lead",
              "Silver",
              "Platinum",
              "Electrum"];

for(var m in metals){
    addMetalIngot(metals[m]);
    addOreDict("ExpandedMining:ingot" + metals[m], "ingot" + metals[m]);
    addMetalBlock(metals[m]);
    addOreDict("ExpandedMining:block" + metals[m], "block" + metals[m]);
}

// While we're on it, let's make blocks for ReactorCraft metals.
// Legend: name, hardness, blast resistance, harvest level
if(isModLoaded("ReactorCraft")){
    var metals = ["Pitchblende", 
                  "Cd-In-Ag Alloy"];
    
    for (var m in metals){
        addMetalBlock(metals[m]);
        addOreDict("ExpandedMining:block" + metals[m], "block" + metals[m]);
        addShapedStandardRecipe("ExpandedMining:block" + metals[m], "block", "ingot" + metals[m]);
    }
    
    // Pitchblende is actually Uranium, so we need to add that oredict as well.
    addOreDict("ExpandedMining:blockPitchblende", "blockUranium");
}


// ----------------------------------------------------------------------------- //


// Tool creation

for (var m in toolmat)
    addToolMaterial(toolmat[m][0],toolmat[m][1],toolmat[m][2],toolmat[m][3],toolmat[m][4],toolmat[m][5],toolmat[m][6]);    

var toolTypes = ["Sword",
                 "Hoe",
                 "Pickaxe",
                 "Axe",
                 "Shovel"];
                 
var toolMats = [["Tin",     "TIN",      "ingotTin"],
                ["Electrum","ELECTRUM", "ingotElectrum"],
                ["Flint",   "FLINT",    "itemFlint"],
                ["Aluminum","ALUMINUM", "ingotAluminum"],
                ["Silver",  "SILVER",   "ingotSilver"],
                ["Copper",  "COPPER",   "ingotCopper"],
                ["Platinum","PLATINUM", "ingotPlatinum"],
                ["Bronze",  "BRONZE",   "ingotBronze"],
                ["Nickel",  "NICKEL",   "ingotNickel"],
                ["Steel",   "STEEL",    "ingotSteel"],
                ["Obsidian","OBSIDIAN", "blockObsidian"],
                ["Emerald", "TEMERALD", "gemEmerald"],
                ["Quartz",  "QUARTZ",   "crystalNetherQuartz"]];

for(var m in toolMats) for(var n in toolTypes){
	addItem("tool" + toolTypes[n] + toolMats[m][0], "Tool" + toolTypes[n], 1, "ExpandedMining.tools").tooldata(ToolData(toolMats[m][1]));
	addShapedStandardRecipe("ExpandedMining:tool" + toolTypes[n] + toolMats[m][0], toolTypes[n].toLowerCase(), toolMats[m][2]);
}

// What's the point of lead if we can't have a lead pipe?  A very nasty weapon, but doesn't last long.
addItem("toolPipeLead","ToolSword",1,"ExpandedMining.tools").tooldata(ToolData("LEAD"));;

// Lead Pipe doesn't have a default recipe.  Let's make one.
addShapedRecipe("ExpandedMining:toolPipeLead", [
  [null, null, "ingotLead"],
  [null, "ingotLead", null],
  ["ingotLead", null, null]]);


// If the chisel mod is included, let's add a more chisels to the game.

if(isModLoaded("chisel")){

    // Order of options: Material name, durability, has modes?
    var materials = [
        ["Flint",       64,     false,  "itemFlint"],
        ["Aluminum",   128,     false,  "ingotAluminum"],
        ["Copper",     256,     false,  "ingotCopper"],
        ["Platinum",   320,     false,  "ingotPlatinum"],
        ["Nickel",     400,     true,   "ingotNickel"],
        ["Bronze",     512,     true,   "ingotBronze"],
        ["Steel",      920,     true,   "ingotSteel"],,
        ["Quartz",     1200,    true,   "crystalNetherQuartz"],
        ["Emerald",    1500,    true,   "gemEmerald"]
    ];

    for (var m in materials) {
        var mat = materials[m][3];
        addItem("toolChisel"+materials[m][0], "ToolChisel", 1, "ExpandedMining.tools").tooldata(ToolData(materials[m][0].toUpperCase()).durability(materials[m][1]).hasModes(materials[m][2]));
        addShapedRecipe("ExpandedMining:toolChisel"+materials[m][0], [
            [null,          mat,    null ],
            ["stickWood",   null,   null ],
            [null,          null,   null ]]);
    }
}

// ----------------------------------------------------------------------------- //


// Armor creation
var armorTypes = ["Helmet",
                  "Chestplate",
                  "Leggings",
                  "Boots"];
                  
var armorMats = [["Tin",        "TIN",      "ingotTin"],
                 ["Lead",       "LEAD",     "ingotLead"],
                 ["Electrum",   "ELECTRUM", "ingotElectrum"],
                 ["Aluminum",   "ALUMINUM", "ingotAluminum"],
                 ["Silver",     "SILVER",   "ingotSilver"],
                 ["Copper",     "COPPER",   "ingotCopper"],
                 ["Platinum",   "PLATINUM", "ingotPlatinum"],
                 ["Nickel",     "NICKEL",   "ingotNickel"],
                 ["Bronze",     "BRONZE",   "ingotBronze"],
                 ["Steel",      "STEEL",    "ingotSteel"],
                 ["Obsidian",   "OBSIDIAN", "blockObsidian"],
                 ["Emerald",    "TEMERALD", "gemEmerald"],
                 ["Quartz",     "QUARTZ",   "crystalNetherQuartz"]
];

for(var m in armorMats) for(var n in armorTypes) {
	addItem("armor" + armorMats[m][0] + armorTypes[n],"CoreArmor",1,"ExpandedMining.armor").armordata(ArmorData(armorMats[m][1], armorTypes[n].toLowerCase()));
	addShapedStandardRecipe("ExpandedMining:armor" + armorMats[m][0] + armorTypes[n],armorTypes[n].toLowerCase(), (armorMats[m][2]));
}



// Next, we want to make a mining helmet.  It will look like a normal iron helmet, except that it will be added to the "Dynamic Lights" configuration.

addItem("armorMiningHelmet","CoreArmor",1,"ExpandedMining.armor").armordata(ArmorData("IRON", "helmet"));
addShapedRecipe("ExpandedMining:armorMiningHelmet", [
  ["ingotIron", "ingotIron", "ingotIron"],
  ["ingotIron", "blockTorch", "ingotIron"],
  [null, null, null]]);