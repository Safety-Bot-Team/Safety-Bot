module.exports = {
	name: 'open',
	category: 'Ticket',
	description: 'Re-opens a ticket.',
	aliases: [],
	async execute(client, message, args){
		if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				})
					.then(() => {
						message.channel.send(`das ticket: ${message.channel} wurde erfolgreich geöffnet!`);
					});
			}
			catch (e) {
				return message.channel.send('Fehler!');
			}
		}
		else {
			return message.reply('Dies ist ein ticket command',);
		}
	},
};