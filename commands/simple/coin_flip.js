const commando = require('discord.js-commando')

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Heads or Tails?'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("You got heads!");
        }
        else
        {
            message.reply("You got Tails!");
        }
    }
}

module.exports = CoinFlipCommand;