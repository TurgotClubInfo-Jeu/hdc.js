
class Event 
{
    name
    cond
    displayWhenActivated
    effect

    Event(name, cond, effect, displayWhenActivated = false) {
        (this.name, this.cond, this.effect, this.displayWhenActivated) = (name, cond, effect, displayWhenActivated);}

    Process(out = console.log)
    {
        if (this.cond())
        {
            if (this.displayWhenActivated)
                out(this.name);

            this.effect();
        }
    }
}
