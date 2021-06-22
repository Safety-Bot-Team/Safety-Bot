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
                 message.channel.send(`<@${memberTarget.user.id}> was successfully unmuted`);
            } else{
                message.channel.send('Please specify a user');     
            }
        }else {
            message.channel.send("You do not have the authority to unmute people.");
        }
    }
}