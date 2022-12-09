
class EventGroup
{
    name
    enabled
    events

    EventGroup(name, events) {
        (this.name, this.enabled, this.events) = (name, false, [...events]); }

    Enable() {
        enabled = true; }
    Disable() {
        enabled = false; }

    Process(out = console.log)
    {
        if (!enabled)
            return;
            
        events.forEach(e => {
            e.Process(out);
        });
    }
}