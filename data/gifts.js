const gifts = [
  // 🎉 Itens engraçados
  { id: 1, name: 'Rolo de macarrão da noiva', price: 2500, image: '/gifts/rolo.png' },
  { id: 2, name: 'Cueca da sorte do noivo', price: 3500, image: '/gifts/cueca.png' },
  { id: 3, name: 'Cartão “Você tinha razão, amor”', price: 4990, image: '/gifts/cartao-razao.png' },
  { id: 4, name: 'Vale: Parente favorito por 1 ano', price: 7990, image: '/gifts/parente-favorito.png' },
  { id: 5, name: 'Porta-retrato: cara de quem fez besteira', price: 9990, image: '/gifts/portaretrato.png' },
  { id: 6, name: 'Botão “Sim, amor” automático', price: 12000, image: '/gifts/botao-simamor.png' },
  { id: 7, name: 'Travesseiro anti-D.R.', price: 15000, image: '/gifts/travesseiro.png' },
  { id: 8, name: 'Almofada detectora de cara feia', price: 22000, image: '/gifts/almofada.png' },
  { id: 9, name: 'Kit sobrevivência à TPM', price: 25000, image: '/gifts/kit-tpm.png' },
  { id: 10, name: 'Cofrinho da próxima lua de mel', price: 30000, image: '/gifts/cofrinho.png' },
  { id: 11, name: 'Capacete à prova de DR', price: 40000, image: '/gifts/capacete.png' },
  { id: 12, name: 'GPS da paciência da esposa', price: 50000, image: '/gifts/gps.png' },
  { id: 13, name: 'Vale “sair com os amigos” (1x por ano)', price: 75000, image: '/gifts/vale-amigos.png' },
  { id: 14, name: 'Manual do casamento com RA', price: 85000, image: '/gifts/manual.png' },
  { id: 15, name: 'Curso Noivo Ninja da Paz Doméstica', price: 100000, image: '/gifts/noivo-ninja.png' },
  { id: 16, name: 'Spa anti-surto conjugal', price: 130000, image: '/gifts/spa.png' },
  { id: 17, name: 'Viagem fictícia para o sofá', price: 170000, image: '/gifts/sofa.png' },
  { id: 18, name: 'Botão “Desculpa” vitalício', price: 250000, image: '/gifts/botao-desculpa.png' },
  { id: 19, name: 'Cancelamento da dívida emocional de 2022', price: 330000, image: '/gifts/divida.png' },
  { id: 20, name: 'Passaporte para o país da razão (uso exclusivo da noiva)', price: 499000, image: '/gifts/passaporte.png' },

  // 🏠 Itens para casa nova
  { id: 21, name: 'Panela de pressão elétrica', price: 35000, image: '/gifts/panela-pressao.png' },
  { id: 22, name: 'Liquidificador potente', price: 18000, image: '/gifts/liquidificador.png' },
  { id: 23, name: 'Jogo de cama king', price: 25000, image: '/gifts/jogo-cama.png' },
  { id: 24, name: 'Kit de panelas antiaderente', price: 55000, image: '/gifts/panelas.png' },
  { id: 25, name: 'Air fryer digital', price: 48000, image: '/gifts/airfryer.png' },
  { id: 26, name: 'Torradeira dupla', price: 16000, image: '/gifts/torradeira.png' },
  { id: 27, name: 'Conjunto de xícaras e pires', price: 12000, image: '/gifts/xicaras.png' },
  { id: 28, name: 'Jogo de pratos cerâmica', price: 42000, image: '/gifts/pratos.png' },
  { id: 29, name: 'Tapete de sala peludo', price: 65000, image: '/gifts/tapete.png' },
  { id: 30, name: 'Aspirador de pó vertical', price: 39000, image: '/gifts/aspirador.png' },
  { id: 31, name: 'Mixer 3 em 1', price: 29000, image: '/gifts/mixer.png' },
  { id: 32, name: 'Organizador de temperos', price: 9500, image: '/gifts/temperos.png' },
  { id: 33, name: 'Varal retrátil de parede', price: 17000, image: '/gifts/varal.png' },
  { id: 34, name: 'Ferro de passar a vapor', price: 23000, image: '/gifts/ferro.png' },
  { id: 35, name: 'Conjunto de toalhas felpudas', price: 28000, image: '/gifts/toalhas.png' },
  { id: 36, name: 'Relógio decorativo de parede', price: 18000, image: '/gifts/relogio.png' },
  { id: 37, name: 'Cesto de roupa com tampa', price: 16000, image: '/gifts/cesto.png' },
  { id: 38, name: 'Espelho decorativo redondo', price: 37000, image: '/gifts/espelho.png' },
  { id: 39, name: 'Kit travesseiro + protetor impermeável', price: 31000, image: '/gifts/travesseiro.png' },
  { id: 40, name: 'Assadeira cerâmica c/ tampa', price: 22000, image: '/gifts/assadeira.png' },
];

export default gifts;
