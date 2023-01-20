import { Map } from "Map.js";

class Tile
{
    /**  @type string */
    Sprite

    /**
     * @param {*} phaser 
     * @param {string} sprite 
     * @param {string} spriteUrl 
     */
    constructor (phaser, sprite, spriteUrl) 
    {
        this.Sprite = sprite;
        phaser.load.image(sprite, spriteUrl);
    }

    /**
     * @param {*} phaser
     * @param {Vector2} pos
     * @param {Map} map
     */
    draw(phaser, map, pos)
    {
        canvasPos = map.MapToCanvas(pos);
        phaser.add.sprite(canvasPos.x, canvasPos.y, this.Sprite);
    }
}