module.exports = {
    name: "ticketsystem",
    category: "Ticket",
    description: "erstellen des ticketsystems",
    aliases: [],
    async execute(client, message, args, prefix) {
		message.guild.channels.create(`Ticket-Lobby`, {
			permissionOverwrites: [
				{
					id: message.guild.roles.everyone,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
					deny: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY','ATTACH_FILES'],
				},
			],
			type: 'text',
			// parent: 'category id',
		}).then(async channel => {
			const prefix = process.env.PREFIX;
			channel.send(`Willkommen im Ticketsystem by Unterwegs! \nUm ein Ticket zu erstellen schreib doch bitte ${prefix}ticket und folge dann den anweisungen. \nVielen Dank das du dir die zeit dafür nimmst.\n\nMit freundlichen Grüßen Vom Gesamtem Server-Team`);
			message.reply(`Das Ticketsystem wurde erfolgreich erstellt. Ihre Tickets können unter ${channel} erstellt werden.`);
		});
    }
}