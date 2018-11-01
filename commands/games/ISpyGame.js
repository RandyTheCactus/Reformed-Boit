const commando = require('discord.js-commando')
const bot = new commando.Client();

class ISpyGameCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'ispy',
            group: 'simple',
            memberName: 'ispy',
            description: 'Play some ISpy'
        });
    }

    async run(message, args)
    {
        message.reply("Incomplete Command. Coming in version v.1.2.0")
        //message.reply("Game1, Game2, Game3, or Game4?");

        //bot.on('message', message => {
            //if (message.content === 'Game1') {
                //message.reply('https://lh3.googleusercontent.com/-an7RtDgPnzA/W10HMtbZrBI/AAAAAAAAEZ8/OcP9n8ZhBkgTR82c22BlN_uo17kV5DD6QCJoC/w530-h361-n-rw/I-Spy%2BGame1.jpg');
            //}
        //});   
    }
}

module.exports = ISpyGameCommand;