const ms = require('ms')
module.exports = {
    name: 'mute',
    description: "Ja... was sagt der befehl?",
    execute(client, message, args, Discord) {
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.permissions.has("MUTE_MEMBERS")){
            const target = message.mentions.users.first();
            if (target) {
    
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> was successfully muted`);
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> is now muted for ${ms(ms(args[1]))}`);
    
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('Please specify a user');
            }
        }else {
            message.channel.send("You do not have the authority to mute people.");
        }
    }
}