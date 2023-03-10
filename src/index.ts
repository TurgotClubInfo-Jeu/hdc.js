import Phaser from "phaser";
import Map from "@/map";

import { default as atelierTiles } from "@/map/mapSets/ateliers.js";
import Character from "@/map/Character";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,

  scene: [
    new Map(atelierTiles[0], [new Character()])
  ]
};
  
const game = new Phaser.Game(config);
game.scene.start("Map");

const scene = game.scene.getScene("Map");
  
console.log("current scene:", scene);


