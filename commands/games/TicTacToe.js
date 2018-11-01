const commando = require('discord.js-commando')

class TicTacToeCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'tictactoe',
            group: 'simple',
            memberName: 'tictactoe',
            description: 'Play a game of Tic-Tac-Toe'
        });
    }

    async run(message, args)
    {
        message.reply('Incomplete Command. Coming in version 1.2.0')
    }
}

module.exports = TicTacToeCommand;