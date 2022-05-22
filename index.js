const { Client, Intents } = require('discord.js');
const config = require('./config.json');

async function bot(){
    const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],});

    await client.once('ready', () => {
        console.log('Ready!');
    });
    await client.on('guildMemberAdd', (member) => {
        const channel = member.guild.channels.cache.find(ch => ch.name == 'geral');
        if(!channel) return null;
        channel.send(`Olá. seja bem vindo(a), ${member}`);
    })
    await client.on("messageCreate", (message) => {
        if((message.content.toLowerCase()).match(/oi/) || (message.content.toLowerCase()).match(/ola/)){
            message.channel.send(`Olá, ${message.author} :)`);
        }
    });
    client.login(config.BOT_TOKEN);
}
bot();

