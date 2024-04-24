export type EcopontoItem = (typeof ecpontoItem)[0]

export const ecpontoItem = [
  {
    id: '1',
    name: 'Daniel Ferro Vellho',
    whatsapp: '77992171243',
    logoUrl: require("@/assets/logo-ferrovelho.png"),
    address: {
      city: "Paulo Afonso",
      country: "Bahia",
      number: 54,
      road: "Menino prodigio"
    },
    operation: {
      morning: ['9:00', '12:00'],
      afternoon: ['13:00', '17:30'],
      saturday: ['9:00', '11:30']
    },
    residuosComprados: [
      'Plástico Filme',
      'Plástico Pet',
      'Plástico Duro',
      'Embalagens Longa vida',
      'Papel Misto',
      'Papelão',
      'Óleo Vegetal',
      'Vidro',
      'Alumínio'
    ]
  },
  {
    id: '2',
    name: 'Maria da Silva',
    whatsapp: '77992171244',
    logoUrl: require("@/assets/logo-auto-car.png"),
    address: {
      city: "Salvador",
      country: "Bahia",
      number: 123,
      road: "Rua das Flores"
    },
    operation: {
      morning: ['8:30', '11:30'],
      afternoon: ['14:00', '18:00'],
      saturday: ['8:30', '12:00']
    },
    residuosComprados: [
      'Papelão',
      'Vidro',
      'Plástico Pet',
      'Alumínio'
    ]
  },
  {
    id: '3',
    name: 'João Oliveira',
    whatsapp: '77992171245',
    logoUrl: require("@/assets/logo-ferrovelho.png"),
    address: {
      city: "Feira de Santana",
      country: "Bahia",
      number: 789,
      road: "Avenida Central"
    },
    operation: {
      morning: ['10:00', '13:00'],
      afternoon: ['14:30', '19:00'],
      saturday: ['10:00', '13:00']
    },
    residuosComprados: [
      'Papel Misto',
      'Óleo Vegetal',
      'Embalagens Longa vida',
      'Plástico Filme'
    ]
  }
]
