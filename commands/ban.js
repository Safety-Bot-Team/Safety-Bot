module.exports = {
    name: 'ban',
    description: "Also wirklich?",
    execute(client, message, args, Discord){
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.permissions.has("BAN_MEMBERS")){
        const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("Dieser bennutzer wurde erfolgreich gebannt!");
            } else {
                message.channel.send(`Du kannst keinen Administrator Kicken!!!`);
            }
        } else {
            message.channel.send(`Du hast nicht die berechtigung diesen benutzer zu bannen!!!`);
        }
    }
}