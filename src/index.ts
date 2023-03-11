import Phaser from "phaser";

import Map from "@/map";

import { default as atelierTiles } from "@/map/mapSets/ateliers.js";
import Character from "@/map/Character";

import heroeSprite from "@/assets/Sprite.png"


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  parent: "app",

  scene: [
    new Map(atelierTiles[0], [new Character("main", heroeSprite, 32, 64, 400, 300)])
  ]
};
  
const game = new Phaser.Game(config);
game.scene.start("Map");

const scene = game.scene.getScene("Map");
  
console.log("current scene:", scene);

