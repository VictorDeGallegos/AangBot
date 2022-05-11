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
    message.channel.send('https://i.pinimg.com/originals/a9/e5/49/a9e5495a47f33e58380815f78f5a557c.png');
  }

  if (message.content.includes('tienes ' + 'mascotas')) {
    message.channel.send(
      `Appa es mi leal bisonte volador` +
        `  https://st1.uvnimg.com/dims4/default/bb00374/2147483647/thumbnail/480x270/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fa%2Fappa_avatar_la_leyenda_aang.jpg`
    );
  }

  if (message.content.includes('cuantos ' + 'años' + ' tienes')) {
    message.channel.send(`112 años` + ` Cuantos años tienes tu ?`);
  }
  
  if (message.content === '¿Quien te creo?') {
    message.channel.send(`Javatar!`);
  }
  
  if (message.content === '¿Que idiomas hablas?') {
    message.channel.send(`Todos🤭`);
  }

  if (message.content === 'bye') {
    message.channel.send(`Bye ${message.author}!`);
  }
});

client.login('OTcxNDk2ODEzNTMyMTgwNTQy.Gx8pyI.UAc0ExA9NpNHwbJsBYHPebotffVQM6wCkMxiA4');
