const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'close',
	category: 'Ticket',
	description: 'Closes the ticket.',
	async execute(client, message, args) {
		if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`Das Tickt: ${message.channel} wurde erfolgreich geschlossen!`);
						});
					}
					catch(e) {
						return message.channel.send('Fehler!');
					}
			})
		}
		else {
			return message.reply('Du kannst nur tickets damit schließen!!');
		  }
	  }
  }
}
