module.exports = {
	name: 'add',
	category: 'Ticket',
	description: 'Fügt ein Benutzer zu einem Ticket hinzu.',
	aliases: [],
	userperms: [],
	async execute (client, message, args, prefix){
		if (message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if (!member) {
				return message.channel.send(`Bennen bitte den benutzer der hinzugefügt werden soll! --> ${prefix}add <member>`);
			}
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`Der Benutzer: ${member} wurde erfolgreich zum ticket: ${message.channel} hinzugefügt`);
				});
			}
			catch (e) {
				return message.channel.send('Fehler!');
			}
		}
	},
};