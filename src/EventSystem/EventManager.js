
class EventManager
{
    static eventGroups = Array();
    static out = console.log;

    static Add(event)
    {
        this.eventGroups.Add(EventGroup(event.name, Array(event)));
    }

    static AddMultiple(name, events)
    {
        this.eventGroups.Add(EventGroup(name, [...events]));
    }
    static AddMultiple(eventGroup)
    {
        this.eventGroups.Add(eventGroup);
    }

    static Remove(name)
    {
        this.eventGroups = this.eventGroups.filter(x => x.name !== name)
    }

    static Enable(name)
    {
        this.eventGroups
            .filter(e => e.name === name)
            .forEach(e => e.Enable());
    }
    static Disable(name)
    {
        this.eventGroups
            .filter(e => e.name === name)
            .forEach(e => e.Disable());
    }

    static Process()
    {
        this.eventGroups.ForEach(e => e.Process(this.out));
    }
}