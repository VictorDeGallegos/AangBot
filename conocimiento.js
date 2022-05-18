module.exports = {
    conocimiento : {
      bienvenida : {
        'intent': 'bienvenida',
        'regex': [
         '\:gem: Hola'
        ],
        'respuesta': [
          'Hola, ¿Que puedo hacer por ti príncipe? Tu pide, que por lobukis y dinero no paramos.',
          'Nos vamos de party o quieres un consejo para ligarte una niña bien?'
        ]
      },
      consejo : {
        'intent': '\:gem: Consejo para ligar',
        'regex': [
          '\:gem: Consejo para ligar',
        ],
        'respuesta': [
          'Bien',
          'Ahí te va'
        ]
      },
      fiesta : {
        'intent': '\:gem: Vamonos de party',
        'respuesta': [
          '¿En que alcaldia estas?'
        ]
      },    
      despedida :{
        'intent': '💔',
        'regex': [
            '.*'
        ],
        'respuesta': [
          'Bueno ya me voy a dormir, si ven que comparto memes es mi manager.'
        ]
      }    
    }
  }