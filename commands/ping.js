const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	category: 'Info',
	description: 'Zeigt dir den aktuellen ping des Clients an',
	aliases: ['latency'],
	async execute(client, message, args) {
		message.channel.send('🏓 Ping...').then((msg) => {
			const pEmbed = new MessageEmbed()
				.setTitle('🏓 Pong!')
				.setColor('GREEN')
				.setDescription(
					`Latency: ${Math.floor(
						msg.createdTimestamp - message.createdTimestamp,
					)}ms\nAPI Latency: ${client.ws.ping}ms`,
				);
			msg.edit(pEmbed);
		});
	},
};