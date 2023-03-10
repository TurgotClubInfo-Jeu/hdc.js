import Map from "@/map";

export default class Tile
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
    draw(phaser, pos)
    {
        phaser.add.sprite(pos.x, pos.y, this.Sprite);
    }
}