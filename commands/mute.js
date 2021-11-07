const ms = require('ms')
module.exports = {
    name: 'mute',
    category: 'Administration',
    description: "Ja... was sagt der befehl?",
    aliases: [],
    userperms: [],
    execute(client, message, args, Discord) {
            const target = message.mentions.users.first();
            if (target) {
    
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> wurde erfolgreich gemutet!`);
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> ist nun fuer ${ms(ms(args[1]))} gemutet!`);
    
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('bitte gebe den user der gemutet werden soll an! ');
            }
    }
}