require('dotenv').config();
const  { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate",(message)=>{

   if(message.author.bot) return;

    message.reply({
        content:"hello"
    })

});

client.on("interactionCreate",(interaction)=>{

    interaction.reply("Pong");

})
client.login(process.env.BOT_TOKEN);