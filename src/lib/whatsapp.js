const NUMBER = '5543991280638'

export const MESSAGES = {
  geral: 'Olá! Conheci a Gelo Alaska pelo site e gostaria de informações sobre os produtos e pedidos.',
  g3: 'Olá! Gostaria de consultar valores e disponibilidade do gelo Gelo Alaska de 3 kg.',
  g5: 'Olá! Gostaria de consultar valores e disponibilidade do gelo Gelo Alaska de 5 kg.',
  cta: 'Olá! Gostaria de solicitar atendimento da Gelo Alaska.',
  forn: 'Olá! Tenho um estabelecimento e gostaria de consultar as condições de fornecimento da Gelo Alaska.',
}

export const wa = (key = 'geral') =>
  `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGES[key])}`
