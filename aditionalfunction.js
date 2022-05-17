module.exports ={
    choice(options){
        //Funcion que elige al azar un elemento de una lista
        var rand = Math.floor(Math.random() * options.length);
        return options[rand];
  },
    
  daConsejo(){
      //funcion que dara un consejo de ligue al usuario
      consejos=[
        '\`\`\`Imagina que te estas vendiendo papi, asi que tienes que hacerte un buen marketing no seas naco y sé caballeroso recuerda que tu eres el rey así que cero piropos \`\`\`',
        '\`\`\`No quieras impresionarla con tu dinero, porque eso se nota, mejor hazlo con tu confianza y tu carisma.\`\`\`',
        '\`\`\`Acércate como si fuera una old friend que no has visto en mucho tiempo\`\`\`',
        '\`\`\`Nunca le preguntes como estas, eso es para básicos, mi rey . Mejor preguntale ¿Que has hecho hoy?, tiene más tema de conversación\`\`\`',
        '\`\`\`En una declaración penal y en ligar, mientras menos digas mejor, deja que ellas hablen.\`\`\`',
        '\`\`\`Mira papi , No te desveles rey , Las ojeras no combinan con tu rostro, tkm, príncipe\`\`\`',
        '\`\`\`Papi dile esto, Pensé que estabas en el cielo por que te confundi con un angel\`\`\`',
        '\`\`\`A ver príncipe, Un verdadero mirrey no sufre por una mujer se va una y llegan dos más.\`\`\`'
      ]
      consejo = module.exports.choice(consejo)
      return consejo
  }
}