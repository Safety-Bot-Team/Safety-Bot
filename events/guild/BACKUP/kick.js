module.exports = {
    name: 'kick',
    description: "Also wirklich?",
    execute(client, message, args, Discord){
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.permissions.has("KICK_MEMBERS")){
            const target = message.mentions.users.first();

            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("this user was kicked");
            }else{
                message.channel.send(`You do not have the right to kick this user!`);
            }
        } else {
            message.channel.send("You do not have the right to kick this user!");
        }
    }
}