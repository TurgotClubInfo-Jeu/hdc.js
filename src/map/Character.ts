import type Phaser from "phaser";

export default class Character {
  spriteSheet: string;
  name: string;
  width: number;
  height: number;
  x: number;
  y: number;
  
  constructor (name: string, spriteSheet: string, width: number, height: number, x:number, y:number) {
    this.name = name;
    this.spriteSheet = spriteSheet;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  public update () {}
  public draw () {}
}