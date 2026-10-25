import Icon from './Icon.jsx'

const ITEMS = [
  ['snow', 'Produção própria', 'Acompanhamento do processo de fabricação.'],
  ['drop', 'Água potável filtrada', 'Cuidado com a origem da água usada no gelo.'],
  ['shield', 'Qualidade', 'Compromisso com o produto em cada pedido.'],
  ['chat', 'Atendimento', 'Informações e pedidos de forma simples.'],
]

export default function Benefits() {
  return (
    <section className="ben" id="diferenciais" aria-label="Diferenciais">
      <div className="wrap">
        <ul>
          {ITEMS.map(([icon, title, text]) => (
            <li key={title}><Icon n={icon} /><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
