module.exports = {
    name: 'kick',
    description: "Also wirklich?",
    aliases: [],
    userperms: [],
    execute(client, message, args, Discord){
            const target = message.mentions.users.first();

            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("Dieser bennutzer wurde erfolgreich gekickt!");
            }else{
                message.channel.send(`Du kannst keinen Administrator kicken!`);
            }
    }
}