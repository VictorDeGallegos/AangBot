const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Conectado como: ${client.user.tag}!`); // Saber nombre y tag del bot
  client.user.setStatus`online`;

  console.groupCollapsed(client.user.presence.status); //Saber estado de bot
});

client.on('messageCreate', async (message) => {
  //Recibimos un mensaje
  console.log(message.content);
  if (message.content === 'ping') {
    message.reply('pong');
  }

  if (message.content === 'Hola') {
    message.channel.send(`Hola ${message.author}!` + `  ¿Me recuerdas? 🤑`);
  }

  if (message.content === 'hola') {
    message.channel.send(`Hola ${message.author}!` + `  ¿Me recuerdas? 🤑`);
  }

  if (message.content.includes('no')) {
    message.channel.send(`Yo se que si 🤭`);
  }

  if (message.content.includes('aang')) {
    message.channel.send(`Tengo que capturar al avatar`);
  }

  if (message.content.includes('Aang')) {
    message.channel.send(`Tengo que capturar al avatar`);
  }

  if (message.content.includes('¿Cual es el mejor equipo de Mexico?')) {
    message.channel.send(`Los gloriosos Pumas de la UNAM`);
  }

  if (message.content.includes('¿Cual es la mejor facultad de la UNAM?')) {
    message.channel.send(`La hermosa Facultad de Ciencias`);
  }


  if (message.content.includes('si')) {
    message.channel.send('http://pm1.narvii.com/6472/204b0658ec2a0a24f1ff467fc8a8b4f9a9a2034d_00.jpg');
  }
});

client.login('OTcxNDk2ODEzNTMyMTgwNTQy.Gx8pyI.UAc0ExA9NpNHwbJsBYHPebotffVQM6wCkMxiA4');
