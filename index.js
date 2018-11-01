const Commando = require('discord.js-commando');
const bot = new Commando.Client({autoReconnect:true});
const profanities = require('profanities');
const TOKEN = 'NDcxNzMzNDEzOTcyNTQxNDYw.DjpJBA.v7tQtpKH55kauENEeKnMRoYkZ3A'


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('games', 'Games');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready',function(){
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member){
    let memberRole = member.guild.roles.find("name", "Reformed");
    member.addRole(memberRole);
    bot.channels.get("421882564614029312").send(["Welcome to **Reformed Squad** " + member.user + "! Please read ***#rules***"]);
});

bot.on("guildMemberRemove", function(member){
    bot.channels.get("421882564614029312").send([member.user + "left **Reformed Squad**... we didnt like them anyway..."])
    console.log(member.user + "left")
});

bot.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();

    for (x = 0; x < profanities.length; x++) {
        if (message.content.toUpperCase() == profanities[x].toUpperCase()){
            
            
            message.channel.send("Please don\'t say that!");
            message.delete();
        }
    }

    setTimeout(function(){
        if (message.content.toUpperCase() == "PLEASE DON\'T SAY THAT!"){
            message.delete()
        }

    },3000);
    
});


bot.login(TOKEN);