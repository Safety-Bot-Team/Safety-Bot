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
                message.channel.send("This user has been banned");
            }else{
                message.channel.send(`You do not have the right to ban this user!`);
            }
        }
    }
}