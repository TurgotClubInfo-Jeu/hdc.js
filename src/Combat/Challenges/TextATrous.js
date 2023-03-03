

class TextATrous extends Challenge
{
    /** @type {string[]} */
    text

    /**
     * @type {boolean}
     * @param {string[]} input
     */
    validate(input)
    {
        var endTxt = this.text[0];
        for (var i = 0; i < this.text.length; i++)
            endTxt += input[i] + this.text[i + 1];

        try
        {
            var result = eval(endTxt);
        }
        catch(e)
        {
            console.log(e);
            return false
        }
        return result == this.solution;
    }
}