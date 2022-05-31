module.exports = {
  choice(options) {
    //Funcion que elige al azar un elemento de una lista
    var rand = Math.floor(Math.random() * options.length);
    return options[rand];
  },

  contarConsejo() {
    //funcion que dara un consejo de ligue al usuario
    consejos = [
      '```Imagina que te estas vendiendo papi, asi que tienes que hacerte un buen marketing no seas naco y sé caballeroso recuerda que tu eres el rey así que cero piropos ```',
      '```No quieras impresionarla con tu dinero, porque eso se nota, mejor hazlo con tu confianza y tu carisma.```',
      '```Acércate como si fuera una old friend que no has visto en mucho tiempo```',
      '```Nunca le preguntes como estas, eso es para básicos, mi rey . Mejor preguntale ¿Que has hecho hoy?, tiene más tema de conversación```',
      '```En una declaración penal y en ligar, mientras menos digas mejor, deja que ellas hablen.```',
      '```Mira papi , No te desveles rey , Las ojeras no combinan con tu rostro, tkm, príncipe```',
      '```Papi dile esto, Pensé que estabas en el cielo por que te confundi con un angel```',
      '```A ver príncipe, Un verdadero mirrey no sufre por una mujer se va una y llegan dos más.```',
    ];
    consejo = module.exports.choice(consejos);
    return consejo;
  },

  mostrarOutfit() {
    //funcion que dara un consejo de ligue al usuario
    Outfits = [
      'https://i.pinimg.com/564x/a4/ac/bf/a4acbf8a7cdfabd4830def5b16f19df7.jpg', //1
      'https://i.pinimg.com/564x/bd/cf/ca/bdcfcac6dffea45ca7090d0f3ff0248c.jpg', //2
      'https://i.pinimg.com/564x/0d/ef/e3/0defe389ce0820a481976a6016a1734e.jpg', //3
      'https://i.pinimg.com/564x/8e/87/ff/8e87ffd4d23f568ead942098ccd648ab.jpg', //4
      'https://i.pinimg.com/564x/93/96/68/939668edca7cdf05a84cd058bf0428a5.jpg', //5
      'https://i.pinimg.com/564x/00/2e/00/002e002ffc74f5bedc5c7cb2d1bd984d.jpg', //6
      'https://i.pinimg.com/564x/19/9d/94/199d94be6ad126c0698b9d49b79987e4.jpg', //7
      'https://i.pinimg.com/564x/61/6d/ce/616dce26aecf3b69ec42c3d86c0b7a67.jpg', //8
      'https://i.pinimg.com/564x/f5/28/29/f528292589e21db5a3273a4216759b98.jpg', //9
      'https://i.pinimg.com/564x/52/8b/ad/528bad5302f78c2d3f39c6b6642f6886.jpg', //10
      'https://i.pinimg.com/564x/69/9b/fb/699bfbe5c679e89781a0b4523d685049.jpg', //11
      'https://i.pinimg.com/564x/fb/f1/2e/fbf12e02dd510997f73671a02cf1d3a6.jpg', //12
      'https://i.pinimg.com/564x/c7/79/93/c77993258124b6ad67b4d80f0548da6d.jpg', //13
      'https://i.pinimg.com/564x/be/3a/12/be3a124d7ae2bfe58e6b785ec56f3a0c.jpg', //14
      'https://i.pinimg.com/564x/ef/a1/e8/efa1e89d7e4fab86298bffe13605aa9a.jpg', //15
      'https://i.pinimg.com/564x/7a/c2/53/7ac2539b67e1ddb70b23e64c2dafbab2.jpg', //16
      'https://i.pinimg.com/564x/2c/05/43/2c054349aabd90e6373abb5cece9a1b9.jpg', //17
      'https://i.pinimg.com/564x/4b/95/22/4b952285c4be567a7ab17bec7b35b014.jpg', //18
      'https://i.pinimg.com/564x/16/e9/c8/16e9c847e88ee291cf8a8d2fe48cdc33.jpg', //19
    ];
    outfit = module.exports.choice(Outfits);
    return outfit;
  },
};
