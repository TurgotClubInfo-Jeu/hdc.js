class Vector2 
{
    /**@type int */
    x
    /**@type int */
    y

    constructor (x, y)
    {
        this.x = x;
        this.y = y;
    }

    plus(v)
    {
        return new Vector2(this.x + v.x, this.y + v.y);
    }
    negative()
    {
        return new Vector2(this.x, this.y);
    }
    times(n)
    {
        new Vector2(this.x * n, this.y * n);
    }
}