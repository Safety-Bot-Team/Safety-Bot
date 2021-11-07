/* eslint-disable no-unused-vars */
module.exports = {
	name: 'delete',
	category: 'Ticket',
	description: 'Delete a specified ticket.',
	aliases: [],
	usage: 'delete',
	async execute(client, message, args) {
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('Du kannst nur tickets damit löschen!');
		}
	},
};