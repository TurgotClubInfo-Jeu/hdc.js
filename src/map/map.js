

class Map
{
    /** @type Tile[][] */
    map

    /** @type Character[] */
    Characters

    /** 
     * @param {string} map representing tile 
     * @param bytes of  
     * @param {Character[]} Characters
    */
    constructor(map, tileMap, Characters)
    {
        this.map = map;
        this.tileMap = tileMap;
        this.Characters = Characters;
    }

    update(phaser)
    {
        for (let x = 0; x < this.map.length; x++)
            for (let y = 0; y < this.map[x].length; y++)
                this.map[x][y].draw(phaser, new Vector2(x, y));

        for (let i = 0; i < this.Characters.length; i++)
        {
            this.Characters[i].update(phaser);
            this.Characters[i].draw(phaser);
        }
    }
} 