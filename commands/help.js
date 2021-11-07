const { MessageEmbed } = require('discord.js');
const { capitalizeFirstLetter } = require('../functions');

module.exports = {
    name: 'help',
    aliases: ['commands'],
    category: 'Info',
    description: 'Zeigt dir alle befehle an ^^',
    async execute(client, message, args) {
        const owner = process.env.BOT_OWNER;
        message.channel.send(`${message.guild.members.cache.get(owner)} arbeitet bereits an diesem befehl, bitte habe etwas gedult. Da dieser befehl jedoch keine prioritaet besitzt, wird es noch etwas dauern bis er fertig ist. \n\nAktuell wird an einem Ticket system gearbeitet!`)
        /*const prefix = process.env.PREFIX;
        if (args.join(' ')) {
            const cmd = client.commands.get(args.join(' ').toLowerCase()) || client.commands.get(client.aliases.get(args.join(' ').toLowerCase()));
            if (cmd.category.toLowerCase() === 'owner' && message.author.id !== BOT_OWNER) return;
            const hembed = new MessageEmbed()
                .setTitle(`Information for bot command`)
                .setColor('BLUE')
                .setTimestamp()
                .setFooter('Syntax: <> = required, [] = optional', `${client.user.displayAvatarURL()}`)
                .setDescription([
                    `> **Name: \`${cmd.name}\`**`,
                    `> **Category: \`${cmd.category.toString()}\`**`,
                    `> **Description: \`${capitalizeFirstLetter(cmd.description)}\`**`,
                    `> **Aliases: \`${cmd.aliases.length ? cmd.aliases.map((a) => `${a}`).join('`, `') : 'None'}\`**`,
                ]);
            return message.channel.send(hembed);
        }
        else {
            const embed = new MessageEmbed()
                .setTitle(`${client.user.username}'s Commands`)
                .setFooter(`${client.user.username}'s Help`, `${client.user.displayAvatarURL()}`)
                .setTimestamp()
                .setColor('BLUE')
                .setDescription([`Der Server Prefix ist \`${prefix}\`. fuer mehr informationen zu einem speziellen command benutze bitte\`${prefix}help <command>\`.
                `]);

            let categories;
            if (message.author.id !== BOT_OWNER) {
                categories = [...new Set(client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category))];
            }
            else {
                categories = [...new Set(client.commands.map(cmd => cmd.category))];
            }

            for (const id of categories) {
                const category = client.commands.filter(cmd => cmd.category === id);

                embed.addField(`${id} (${category.size})`, category.map(cmd => `\`${cmd.name}\``).join(' '));
            }
            return message.channel.send(embed);
        }*/
    }
}
