module.exports = {
    name: 'unban',
    description: "Also wirklich?",
    execute(client, message, args, Discord) {
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                message.guild.members.unban(target.id)
                message.channel.send("Dieser bennutzer wurde erfolgreich entbannt!");
            } else {
                message.channel.send(`Du hast nicht die berechtigung diesen benutzer zu entbannen!!!`);
            }
        }
    }
}