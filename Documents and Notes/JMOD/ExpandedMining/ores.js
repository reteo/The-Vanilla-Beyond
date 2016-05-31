// Ore creation
var ores = ["Aluminum","Copper","Tin","Nickel","Lead","Silver","Platinum"];

for(var m in ores){
    addBlock("ore" + ores[m], "CoreBlock", 3.0, 5.0, "pickaxe", 1, "rock", "ExpandedMining.general");
    addOreDict("ExpandedMining:" + "ore" + ores[m], "ore" + ores[m]);
    addSmeltingRecipe("ExpandedMining:" + "ingot" + ores[m],"ExpandedMining:" + "ore" + ores[m]);
}


// ----------------------------------------------------------------------------- //


// Ore Stats
// Legend: blockID, [Harvest levels for meta 0, meta 1, meta 2, ... meta n]
//      a harvest level of -1 means the meta is not altered.
var blocks = [
    ["minecraft:coal_ore",          [0], null],
    ["ExpandedMining:oreTin",           [1], null],
    ["ExpandedMining:oreLead",          [1], null],
    ["minecraft:gold_ore",          [2], null],
    ["ExpandedMining:oreSilver",        [2], null],
    ["ExpandedMining:oreAluminum",      [1], null],
    ["ExpandedMining:oreCopper",        [1], null],
    ["minecraft:redstone_ore",      [2], null],
    ["minecraft:lit_redstone_ore",  [2], null],
    ["ExpandedMining:orePlatinum",      [2], null],
    ["ExpandedMining:oreNickel",        [2], null],
    ["minecraft:iron_ore",          [1], null],
    ["minecraft:lapis_ore",         [2], null],
    ["minecraft:obsidian",          [3], null],
    ["minecraft:emerald_ore",       [2], null],
    ["minecraft:quartz_ore",        [2], null],
    ["minecraft:diamond_ore",       [2], null],
    // Railcraft: Sulfur, Saltpeter, Abyssal (Diamond, Emerald, Lapis), Firestone, (null), Poor (Iron, Gold, Copper, Tin, Lead)
    ["Railcraft:ore",               [0,0,3,3,2,6,-1,1,2,1,1,1], "Railcraft"]
];


for (var m in blocks)
    if ((blocks[m][3] == null) || isModLoaded(blocks[m][3]))
        for (var n in blocks[m])
            if (blocks[m][1][n] >= 0)
                setBlockProperties(blocks[m][0]) .harvestlevel(n,blocks[m][1][n]);


/* ----------------------------------------------------------------------------- 



var blocks = [
    ["minecraft:coal_ore",          [4.2], null],
    ["ExpandedMining:oreTin",           [7.0], null],
    ["ExpandedMining:oreLead",          [9.1], null],
    ["minecraft:gold_ore",          [20.4], null],
    ["ExpandedMining:oreSilver",        [12.5], null],
    ["ExpandedMining:oreAluminum",      [5.8], null],
    ["ExpandedMining:oreCopper",        [12.7], null],
    ["minecraft:redstone_ore",      [12.7], null], // We'll call this an isotope of Copper.
    ["minecraft:lit_redstone_ore",  [12.7], null],
    ["ExpandedMining:orePlatinum",      [30.0], null],
    ["ExpandedMining:oreNickel",        [15.8], null],
    ["minecraft:iron_ore",          [14.4], null],
    ["minecraft:lapis_ore",         [9.3], null],
    ["minecraft:obsidian",          [7.7], null],
    ["minecraft:emerald_ore",       [16.1], null],
    ["minecraft:quartz_ore",        [9.7], null],
    ["minecraft:diamond_ore",       [12.7], null],
    ["appliedenergistics2:tile.OreQuartz",
                                    [9.7], "appliedenergistics2"],
    ["appliedenergistics2:tile.OreQuartzCharged",
                                    [9.7], "appliedenergistics2"],
    ["appliedenergistics2:tile.BlockSkyStone",
                                    [20.0], "appliedenergistics2"],
    // Forestry:  Apatite, Copper, Tin
    ["Forestry:resources",          [8.8,12.7,7.0], "Forestry"],
    ["minechem:tile.oreUranium",    [26.6], "minechem"],
    // ElectriCraft: Copper, Tin, Silver, Nickel, Aluminum, Platinum
    ["ElectriCraft:electricraft_block_ore", 
                                    [12.7,7.0,12.5,15.8,5.8,30.0], "ElectriCraft"],
    // Project Red: Ruby, Sapphire, Peridot, Copper, Tin, Silver, Electrotine
    ["ProjRed|Exploration:projectred.exploration.ore",
                                    [11.1,16.1,11.5,12.7,7.0,12.5,12.7], "ProjRed|Exploration"],
    // Railcraft: Sulfur, Saltpeter, Abyssal (Diamond, Emerald, Lapis), Firestone, (null), Poor (Iron, Gold, Copper, Tin, Lead)
    ["Railcraft:ore",               [5.0,4.0,12.7,16.1,9.3,9.5,-1,14.4,20.4,12.7,7.0,9.1], "Railcraft"],
    ["ReactorCraft:reactorcraft_block_fluoriteore",
                                    [7.6,7.6,7.6,7.6,7.6,7.6,7.6,7.6], "ReactorCraft"],
    // ReactorCraft: (null) Pitchblende, Cadmium, Indium, Silver, End Pitchblende, Ammonium Chloride, Calcite, Magnetite, Thorite
    ["ReactorCraft:reactorcraft_block_ore", 
                                    [-1,26.6,9.2,6.0,12.5,26.6,3.0,5.9,15.2,12.6], "ReactorCraft"]
];

for (var m in blocks)
    if ((blocks[m][3] == null) || isModLoaded(blocks[m][3]))
        for (var n in blocks[m])
            if (blocks[m][1][n] >= 0)
                setBlockProperties(blocks[m][0] + ":" + n) .hardness(blocks[m][1][n]).br(blocks[m][1][n]);



// ----------------------------------------------------------------------------- */



// Ore Spawning

// The order is "name", vein size, chances per chunk, lower Y level, higher Y level.
if (!isModLoaded("CustomOreGen")){
    ores = [
        ["Alumninum", 7, 24, 5, 64],
        ["Copper", 7, 22, 5, 64],
        ["Tin", 7, 20, 5, 64],
        ["Nickel", 8, 12, 16, 48],
        ["Lead", 8, 8, 8, 32],
        ["Silver", 8, 4, 8, 32],
        ["Platinum", 4, 2, 5, 16]];
    
    for (var m in ores){
        addOreGeneration().blockToGenerate("ExpandedMining:ore"+ores[m][0]).veinSize(ores[m][1]).chancesPerChunk(ores[m][2]).startY(ores[m][3]).endY(ores[m][4]);
    }
}