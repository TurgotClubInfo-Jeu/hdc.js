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

    draw(phaser)
    {
        phaser.add.image(this.sprite);
    }
}