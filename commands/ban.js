module.exports = {
    name: 'ban',
    category: 'Administration',
    description: "Banne einen benutzer",
    aliases: [],
    execute(client, message, args, Discord){

        const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("Dieser bennutzer wurde erfolgreich gebannt!");
            } else {
                message.channel.send(`Du kannst keinen Administrator Kicken!!!`);
            }
    }
}