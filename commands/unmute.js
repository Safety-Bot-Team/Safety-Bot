module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(client, message, args, Discord){
        if(message.member.permissions.has("MUTE_MEMBERS")){
            const target = message.mentions.users.first();
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        
                let memberTarget= message.guild.members.cache.get(target.id);
        
                memberTarget.roles.remove(muteRole.id);
                 message.channel.send(`<@${memberTarget.user.id}> wurde erfolgreich gemutet!`);
            } else{
                message.channel.send('Gebe bitte den user an welcher entmutet werden soll!');     
            }
        }else {
            message.channel.send("Du hast keine Berechtigung um diesen befehl zu verwenden!");
        }
    }
}