import Phaser from "phaser";

import Character from "@/map/Character"
import Vector2 from "@/map/Vector2";
import Tile from "@/map/tile";

export default class Map extends Phaser.Scene {
  public map: number[][];
  public characters: Character[];

  private tileSize: number;
  private offset: Vector2;

  constructor (
    map: number[][],
    characters: Character[],
    tileSize = 32,
    offset = new Vector2(0, 0)
  ) {
    super({
      key: "Map"
    });
    
    this.map = map;
    this.characters = characters;
    
    this.tileSize = tileSize;
    this.offset = offset;
  }   

  preload () {
    console.log("SCENE:", this)
    this.load.image('background', 'src/assets/background.png');
  };
  
  create () {
    console.log("CREATE SCENE:", this)
  };

  update () {
    let i = 0
    this.draw(this.map, i, i);
    i++

    for (const character of this.characters) {
      character.update();
      character.draw();
    }
  }

  public mapToCanvas (pos: Vector2) {
    return this.offset.add(pos.times(this.tileSize));
  }

  public canvasToMap (pos: Vector2) {
    return pos.add(this.offset.negate()).times(1 / this.tileSize);
  }

  public draw (Tilemap: number[][], x: number, y: number) {
    // console.log(Tilemap);
    const map = this.make.tilemap({ data: Tilemap, tileWidth: 32, tileHeight: 32 });
    const tiles = map.addTilesetImage('background');
    const layer = map.createLayer(0, tiles, x*32, y*32);
  }
} 