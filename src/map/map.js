

class Map
{
    static TileTypes =
    {
        Wall: new Tile(),
        Path: new Tile()
    }

    /** @type TileTypes[][] */
    Map 

    /** @type Character[] */
    Characters

    /** @type Map */
    static Instance
    /** @type int */
    static tileSize
    /** @type Vector2 */
    static offset

    /** 
     * @param {string} map representing tile 
     * @param bytes of  
     * @param {Character[]} Characters
    */
    constructor(map, tileMap, Characters)
    {
        Instance
        this.Map = map;
        this.tileMap = tileMap;
        this.Characters = Characters;
    }

    update(phaser)
    {
        for (let x = 0; x < this.Map.length; x++)
            for (let y = 0; y < this.Map[x].length; y++)
                TileTypes[this.Map[x][y]].draw(phaser, new Vector2(x, y));

        for (let i = 0; i < this.Characters.length; i++)
        {
            this.Characters[i].update(phaser);
            this.Characters[i].draw(phaser);
        }
    }

    /** 
     * @param {Vector2} pos
     */
    MapToCanvas(pos)
    {
        return offset.plus(pos.times(tileSize));
    }

    /** 
     * @param {Vector2} pos
     */
    CanvasToMap(pos)
    {
        return pos.add(offset.negate()).times(1 / tileSize);
    }
} 