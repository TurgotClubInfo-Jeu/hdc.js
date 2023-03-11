import Phaser from "phaser";

import { throttle } from "@/utils";

import Character from "@/map/Character"
import Vector2 from "@/map/Vector2";
import Tile from "@/map/tile";

const KEYS = {
  LEFT: "q",
  RIGHT: "d",
  UP: "z",
  DOWN: "s"
} as const;

export default class Map extends Phaser.Scene {
  public map: number[][];
  public characters: Character[];

  private tileSize: number;
  private offset: Vector2;
  private x: number = 0;
  private y: number = 0;
  private oldX: number = 0;
  private oldY: number = 0;
  private isDrawing: boolean = false;
  private isMoving: boolean = false;
  private layer!: Phaser.Tilemaps.TilemapLayer;
  private characterManager: Phaser.GameObjects.Sprite[] = [];
  private characterRotation: keyof typeof KEYS = "DOWN";

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
    for (const character of this.characters) {
      this.load.spritesheet(character.name, character.spriteSheet, {frameWidth: character.width, frameHeight: character.height})
    }
  };
  
  create () {
    console.log("CREATE SCENE:", this);

    this.firstDrawBackground(this.map, this.x, this.y);

    for (const character of this.characters){
      this.characterManager.push(this.add.sprite(character.x, character.y, character.name))
    }


    if (!this.isMoving){
        this.input.keyboard.on('keydown', (event: KeyboardEvent) => {
          const is_shift = event.shiftKey;
          const key = event.key.toLowerCase() as typeof KEYS[keyof typeof KEYS];
      
          const action_item = Object.entries(KEYS).find(
            ([_, value]) => value === key
          );
    
          if (!action_item) return;
          const action = action_item[0] as keyof typeof KEYS;

          this.characterRotation = action

          this.isMoving = true;
    
          switch (action) {
            case "UP":
              if (this.y < 0){                     
                this.y += 1
              }
              break;
            case "DOWN":                   
              if (-this.map.length <= this.y - 1 - 600/32){
                this.y -= 1
              }
            break;
            case "LEFT":          
              if (this.x  < 0){
                this.x += 1
              }
            break;
            case "RIGHT":            
              if (-this.map[0].length <= this.x - 1 - 800/32){            
                this.x -= 1
              }
            break;
          }

          this.isMoving = false;

    })
    }
  };

  update () {
    // console.log("update", this.x, this.y)
    if (this.oldX != this.x || this.oldY != this.y){
        this.drawBackground(this.x, this.y);
    
        for (const character of this.characterManager) {
          switch (this.characterRotation) {
            case "DOWN":
              character.setFrame(0);
              break;
            case "UP":
              character.setFrame(1);
              break;
            case "RIGHT":
              character.setFrame(2).setFlipX(true);
              break;
            case "LEFT":
              character.setFrame(2).setFlipX(false);
              break;
          
            default:
              console.log("nique ta mere");
              
              break;
          }       
        }
    }
  }

  public mapToCanvas (pos: Vector2) {
    return this.offset.add(pos.times(this.tileSize));
  }

  public canvasToMap (pos: Vector2) {
    return pos.add(this.offset.negate()).times(1 / this.tileSize);
  }

  public firstDrawBackground (Tilemap: number[][], x: number, y: number) {
    // console.log(Tilemap);
    // console.log(x,y);

    
    const map = this.make.tilemap({ data: this.map, tileWidth: 32, tileHeight: 32 });
    const tiles = map.addTilesetImage('background');
    this.layer = map.createLayer(0, tiles, this.x*32, this.y*32);

    
    
  }

  public async drawBackground (x: number, y: number) {

    let animationSpeed = 50
    
    if(this.isDrawing) return

    this.isDrawing = true;
      
      if(this.oldX != x){
        if(this.oldX < x){
          this.oldX = x;


          
          for (let i=0; i<=1; i+=0.1){                            
            this.layer.x = ((x-1)+i)*32;
            await new Promise<void>(resolve => {setTimeout(() => resolve(), animationSpeed)})
          }
        }
        else {
          this.oldX = x;

          for (let i=0; i<=1; i+=0.1){             
            this.layer.x = ((x+1)-i)*32;
            await new Promise<void>(resolve => {setTimeout(() => resolve(), animationSpeed)})
          }
        }
      }
      else if (this.oldY != y){
        if(this.oldY < y){
          this.oldY = y;

          for (let i=0; i<=1; i+=0.1){              
              this.layer.y = ((y-1)+i)*32;
              await new Promise<void>(resolve => {setTimeout(() => resolve(), animationSpeed)})
          }
        }
        else {
          this.oldY = y;

          for (let i=0; i<=1; i+=0.1){              
              this.layer.y = ((y+1)-i)*32;
              await new Promise<void>(resolve => {setTimeout(() => resolve(), animationSpeed)})
          }
        }
      }
    this.isDrawing = false;  
  }
} 