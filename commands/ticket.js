module.exports = {
	name: 'ticket',
	category: 'Ticket',
	description: "Erstellt ein ticket",
	async execute(client, message, args, prefix) {
		if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('Du hast bereits ein ticket erstellt');
		}

		message.guild.channels.create(`Ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
			// parent: 'category id',
		}).then(async channel => {
			channel.send(`Dies ist dein ticket ${message.author}, ein Supporter wird sich in krueze um dich kuemmern. \nSolltest du noch weiter nutzer zu diesem Ticket hinzufügen wollen so nutze bitte -add <usernamen#tag>(der tag muss nur hinzugefügt werden wenn es mehrere nutzer mit diesem namen gibt)`);
			message.reply(`Dein Ticket wurde erfolgreich erstellt, du kannst es unter ${channel} finden.`);
		});
	},
};