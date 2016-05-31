// Basic Colors:
defineColor("RED", 255, 0, 0);
defineColor("GREEN", 0, 255, 0);
defineColor("BLUE", 0, 0,255);

// ----------------------------------------------------------------------------- //



//Tool Materials
// Legend: name, mininglevel, durability, efficiency(speed), damage vs entities, enchantability, repairmaterial (must be oreDicted)
var toolmat = [
    ["WOOD",            0,   59,  2.0,  0.0,  15, "plankWood",      null],
    ["LEAD",            0,   26,  3.6,  5.0,   2, "ingotLead",      null],
    ["TIN",             0,   20,  2.8,  4.5,   6, "ingotTin",       null],
    ["GOLD",            0,   32, 12.0,  0.0,  22, "ingotGold",      null],
    ["SILVER",          0,   50, 10.3,  0.0,  20, "ingotSilver",    null],
    ["ELECTRUM",        0,   41,  6.3,  6.2,  21, "ingotElectrum",  null],
    ["STONE",           1,  131,  4.0,  1.0,   5, "cobblestone",    null], // Assuming Feldspar
    ["FLINT",           1,  151,  3.9,  0.8,   5, "itemFlint",      null],
    ["ALUMINUM",        1,  171,  2.4,  2.0,   8, "ingotAluminum",  null],
    ["COPPER",          1,  210,  6.7,  6.3,  14, "ingotCopper",    null],
    ["PLATINUM",        2,  230, 13.0,  0.0,  14, "ingotPlatinum",  null],
    ["IRON",            2,  250,  6.0,  6.0,  14, "ingotIron",      null],
    ["NICKEL",          2,  191,  9.0,  6.4,  12, "ingotNickel",    null],
    ["BRONZE",          2,  512, 10.0,  6.5,  13, "ingotBronze",    null],
    ["STEEL",           2,  774,  7.0,  5.3,  14, "ingotSteel",     null],
    ["OBSIDIAN",        4, 2000,  3.2,  0.3,  15, "blockObsidian",  null],
    ["QUARTZ",          2, 1037,  3.5,  0.5,  14, "crystalNetherQuartz", null],
    ["TEMERALD",        3, 1299, 11.0,  3.8,  10, "gemEmerald",     null], // "True" Emerald, not diamond with weird material name.
    ["EMERALD",         3, 1561,  8.0,  3.0,  10, "gemDiamond",     null]
];

for (var m in toolmat)
    if ((toolmat[m][7] == null) || isModLoaded(toolmat[m][7]))
        addToolMaterial(toolmat[m][0],toolmat[m][1],toolmat[m][2],toolmat[m][3],toolmat[m][4],toolmat[m][5],toolmat[m][6]);


// ----------------------------------------------------------------------------- //
    

// Armor Colors
defineColor("WOOD", 135, 73, 13);
defineColor("TIN", 256, 256, 256);
defineColor("LEAD", 179, 182, 220);
defineColor("ELECTRUM", 255, 255, 192);
defineColor("ALUMINUM", 192, 192, 192);
defineColor("SILVER", 227, 247, 255);
defineColor("COPPER", 192, 104, 64);
defineColor("PLATINUM", 102, 160, 255);
defineColor("NICKEL", 221, 210, 168);
defineColor("BRONZE", 192, 88, 0);
defineColor("STEEL", 128, 128, 128);
defineColor("OBSIDIAN", 27, 21, 40);
defineColor("QUARTZ", 219, 204, 191);
defineColor("CERTUS", 186, 219, 255);
defineColor("TEMERALD", 65, 243, 132); // True emerald, not diamond with weird material name.

    
// Armor Materials
var armormat = [
    ["WOOD",             9, 2,  5,  4, 1, 15, "plankWood",        null],
    ["TIN",              5, 1,  4,  2, 1,  6, "ingotTin",         null],
    ["LEAD",            10, 2,  5,  3, 1,  2, "ingotLead",        null], // Lead suit, Weak for now, but hopefully can be buffed as a hazmat suit later.
    ["ELECTRUM",         8, 2,  5,  3, 1, 21, "ingotElectrum",    null],
    ["ALUMINUM",        12, 2,  6,  4, 2,  8, "ingotAluminum",    null],
    ["SILVER",           9, 2,  5,  3, 1, 24, "ingotSilver",      null],
    ["GOLD",             7, 2,  5,  3, 1, 22, "ingotGold",        null],
    ["COPPER",          13, 2,  6,  5, 2, 14, "ingotCopper",      null],
    ["PLATINUM",        14, 2,  6,  5, 2, 14, "ingotPlatinum",    null],
    ["IRON",            15, 2,  6,  5, 2, 14, "ingotIron",        null],
    ["NICKEL",          13, 2,  6,  4, 2, 12, "ingotNickel",      null],
    ["BRONZE",          19, 2,  6,  5, 2, 13, "ingotBronze",      null],
    ["STEEL",           22, 2,  7,  5, 2, 14, "ingotSteel",       null],
    ["OBSIDIAN",        40, 3,  9,  6, 3, 15, "blockObsidian",    null],
    ["QUARTZ",          26, 3,  7,  6, 3, 14, "crystalNetherQuartz", null],
    ["TEMERALD",        29, 3,  8,  6, 3, 10, "gemEmerald",       null],
    ["EMERALD",         33, 3,  8,  6, 3, 10, "gemDiamond",       null]
];

for (var m in armormat)
    if ((armormat[m][8] == null) || isModLoaded(armormat[m][8]))
        addArmorMaterial(armormat[m][0], armormat[m][1], armormat[m][2], armormat[m][3], armormat[m][4], armormat[m][5], armormat[m][6], armormat[m][7]);
