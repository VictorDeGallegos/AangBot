module.exports = {
  conocimiento: {
    bienvenida: {
      intent: 'bienvenida',
      regex: ['Hola'],
      respuesta: [
        'Hola, ¿Que puedo hacer por ti príncipe? Tu pide, que por lo  bukis y dinero no paramos.',
        'Nos vamos de party o quieres un consejo para ligarte una niña bien?',
      ],
    },

    presentacion: {
      intent: 'presentación',
      regex: ['(quien eres|eres)', '(presentate|presentacion)'],
      respuesta: [
        'Hola, Soy un bot que te lleva de fiesta y  te ayuda a ligarte a una niña bien.' +
          '¿Que puedo hacer por ti príncipe?' +
          'Tu pide, que por lobukis y dinero no paramos.' +
          'Nos vamos de party a uno de los mejores antros de la ciudad o prefieres un consejo para ligarte una niña bien?',
      ],
    },

    consejo: {
      intent: 'Consejo para ligar',
      regex: ['Consejo para ligar|consejo|como ligar|quiero romper el hielo|'],
      respuesta: ['Agarrate principe, toma nota...', 'Ahí te va, atención neni...'],
    },

    desaprobacion: {
      intent: 'desaprobacion',
      regex: ['(no me gusta|me aburre|algo mas|otr(a|o)|miedo|asusta|mas|no gracias)'],
      respuesta: ['Y ahorita no tengo paciencia por que no tengo tiempo príncipe'],
    },

    fiesta: {
      intent: 'Vamonos de party',
      regex: ['Vamonos de party'],
      respuesta: ['¿En que alcaldia estas?'],
    },
    despedida: {
      intent: 'Despedida',
      regex: ['(bye|hasta luego|Adios|apagate|hasta la vista|nos vemos|Cuidate mucho)'],
      respuesta: ['Bueno ya me voy a dormir, si ven que comparto memes es mi manager.'],
    },
  },
};
