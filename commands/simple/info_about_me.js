const commando = require('discord.js-commando')
const discord = require('discord.js')

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn about the Reformed Squad'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("About Me", "Hello my name is Reformed Bot, I'm a project being developted by Randy(@Randy#9443), the Founder of the Reformed Squad discord.", true)
            .addBlankField(true)
            .addField("Admins", "These guys and girls are basically your bitches, if you need something, bother them.")
            .addField("OG Squad", "These guys have been with us since day one. They have stuck with this group we now call Reformed Squad through all the hell this community has gone through")
            .addField("Reformed", "Everyone in Reformed are the living core of our server. With out each and everyone of you we would just be a basic server. Thank you.")
            .addBlankField()
            .setColor("#79448b")
            .setThumbnail("https://lh3.googleusercontent.com/-oU9-iV5siRw/W1mExI5fLpI/AAAAAAAAEYk/MbIipXiCnBI4cLcaKW6XHLNpwmj1cUzNQCJoC/w530-h530-n-rw/CactusLove.jpg")
            .setFooter("Thanks for having interest in who we are. :)")
        
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;