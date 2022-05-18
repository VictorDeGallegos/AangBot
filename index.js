const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const adfunc = require('./aditionalfunction');
const refunc = require('./responseFunctions');
const conocimiento = require('./conocimiento');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

//Prefijo
var prefix = '💎'; //Prefijo del bot UNICODE 1153
//Base de conocimiento
var conoci = conocimiento.conocimiento;
//Intent
var intent;
//Respuesta
var respuesta = '';
//Info extra
var infoAdicional = '';
//Contexto por DEFAULT
var contexto = 'DEFAULT';

client.on('ready', () => {
  console.log(`Conectado como: ${client.user.tag}!`); // Saber nombre y tag del bot
  client.user.setStatus`online`;

  console.groupCollapsed(client.user.presence.status); //Saber estado de bot
});

client.on('messageCreate', async (message) => {
  console.log(message.content);
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }
  message.channel.sendTyping();
  //if (message.content === 'ping') {
  var text = message.content;
  intent = refunc.findIntent(conoci, text);
  //console.log(intent);
  contexto = refunc.identificarContexto(intent, contexto);
  //console.log(contexto);
  respuesta = refunc.responder(intent);
  //console.log(respuesta);
  infoAdicional = refunc.acciones(intent, text, contexto);
  // console.log(infoAdicional);
  respuesta += infoAdicional;
  message.channel.send(respuesta);
  // }
});

client.login('OTcxNDk2ODEzNTMyMTgwNTQy.Gx8pyI.UAc0ExA9NpNHwbJsBYHPebotffVQM6wCkMxiA4'); //ENCRIPTAR TOKEN
