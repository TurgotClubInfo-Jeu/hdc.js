class Tile
{
    /**  @type string */
    sprite

    /**
     * @param {*} phaser 
     * @param {string} sprite 
     * @param {string} spriteUrl 
     */
    constructor (phaser, sprite, spriteUrl) 
    {
        this.sprite = sprite;
        phaser.load.image(sprite, spriteUrl);
    }

    /**
     * @param {*} phaser
     * @param {Vector2} pos
     */
    draw(phaser, pos)
    {
        phaser.add.sprite(pos.x, pos.y, this.sprite);
    }
}