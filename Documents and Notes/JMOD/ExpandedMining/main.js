/* Expanded Mining is a mod that provides common materials used by many mods.
 * This mod includes weapons, tools, and armor.
 * 
 * It is recommended to install Vanilla Ingot Works in order to make the alloys.
 */

// Anvils repair tools using the tool and its key ingredient.
Settings.enhancedAnvilRepair(true);
// Crafting benches repair tools using the tool and its key ingredient.
Settings.craftingGridToolRepair(true);
// When tools break, they just won't work until they're fixed.
Global.preventToolBreaking(true);

// These options show the mining level of tools and blocks in the tooltips.
Settings.showToolHarvestLevels(true);
//Settings.showBlockHarvestLevels(true);

// These options show armor values in the tooltip.
Settings.showArmorValues(true);

// We will include RotaryCraft in the progression so its material needs to change, too.
RotaryCraft.patchRotarycraftSteelTools(true);

// Before we begin, it helps to have a creative mode tab.
addCreativeTab("ExpandedMining.general","Expanded Mining: Ores and Metals","ExpandedMining:oreCopper");
addCreativeTab("ExpandedMining.tools","Expanded Mining: Tools and Weapons","ExpandedMining:toolPipeLead");
addCreativeTab("ExpandedMining.armor","Expanded Mining: Armor","ExpandedMining:armorSilverChestplate");

// Creating tool and armor material stats.
load("materials.js");

// Creating items and blocks.
load("objects.js");

// Creating and distributing ores.
load("ores.js");