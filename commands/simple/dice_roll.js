const commando = require('discord.js-commando')

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Roll a die'
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("You rolled a " + diceRoll);
    }
}

module.exports = DiceRollCommand;