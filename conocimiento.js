module.exports = {
  conocimiento: {
    bienvenida: {
      intent: 'bienvenida',
      regex: ['Hola'],
      respuesta: [
        'Hola, ¿Que puedo hacer por ti príncipe? Tu pide, que por lo  bukis y dinero no paramos 💸.',
        'Nos vamos de party 🍾 o quieres un consejo para ligarte una niña bien? 💅🏻',
      ],
    },

    presentacion: {
      intent: 'presentación',
      regex: ['(quien eres)', '(presentate|presentacion)'],
      respuesta: [
        'Hola, soy el único bot que te lleva de fiesta y  te ayuda a ligarte a una niña bien.' +
          '¿Que puedo hacer por ti príncipe?' +
          'Tu pide, que por lobukis y dinero no paramos.' +
          'Nos vamos de party a uno de los mejores antros de la ciudad o prefieres un consejo para ligarte una niña bien?',
      ],
    },

    consejo: {
      intent: 'consejo',
      regex: ['(Consejo para ligar|romper el hielo|consejo|Consejo)'],
      respuesta: ['Agarrate principe, toma nota...', 'Ahí te va, atención principe...'],
    },

    desaprobacion: {
      intent: 'desaprobacion',
      regex: ['no me gusta|me aburre|algo mas|otr(a|o)|miedo|asusta|mas'],
      respuesta: [''],
    },

    fiesta: {
      intent: 'fiesta',
      regex: ['Vamonos de party | fiesta | peda'],
      respuesta: ['¿En que alcaldia estas?'],
    },
    despedida: {
      intent: 'despedida',
      regex: ['(bye|hasta luego|Adios|apagate|hasta la vista|nos vemos|Cuidate mucho)'],
      respuesta: ['Bueno ya me voy a dormir, si ven que comparto memes es mi manager ✌🏻'],
    },

    embed: {
      intent: 'embed',
      regex: [
        'Alvaro Obregón|Azcapotzalco|Benito Juárez|Coyoacán|Cuajimalpa|Cuauhtémoc|Gustavo A Madero|Iztacalco|Iztapalapa|Magdalena Contreras|Miguel Hidalgo|Milpa Alta|Tláhuac|Tlalpan|Venustiano Carranza|Xochimilco',
      ],
      respuesta: ['¿Quieres un consejo para tu outfit principe?'],
    },

    desconocido: {
      intent: 'desconocido',
      regex: ['.*'],
      respuesta: [
        'Lo siento Principe ¿Puedes escribirlo bien? 🤢',
        'A ver mirrey , no tengo ni idea de lo que me estas diciendo 🤔',
        '¿Todo bien en casa? , usa un diccionario papi 🤷🏻‍♂️',
        'A ver plebeyo escribes bien o te vas, por que no me pienso dar baños de pueblo 🤠😒',
        'Obvio no puedo hacer eso ¿En que pensabas rey? 🥸',
        'Valorate mi rey ¡tqm! 😳',
      ],
    },
  },
};
