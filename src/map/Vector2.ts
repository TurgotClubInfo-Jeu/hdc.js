export default class Vector2 
{
    public x: number
    public y: number

    constructor (x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    add(v: Vector2)
    {
        return new Vector2(this.x + v.x, this.y + v.y);
    }
    negate()
    {
        return new Vector2(-this.x, -this.y);
    }
    times(n: number)
    {
        return new Vector2(this.x * n, this.y * n);
    }
}