import Icon from './Icon.jsx'
import { wa } from '../lib/whatsapp.js'

const ITEMS = [
  ['cart', 'Mercados e mercearias', 'Gelo para pronta entrega no seu balcão.'],
  ['beer', 'Bares', 'Bebidas sempre geladas para o seu público.'],
  ['fork', 'Restaurantes', 'Praticidade para a cozinha e o salão.'],
  ['cal', 'Festas e eventos', 'Gelo na medida certa para a sua comemoração.'],
  ['truck', 'Revendedores', 'Produto de marca para revender.'],
  ['user', 'Clientes particulares', 'Para o churrasco, a família e o dia a dia.'],
]

export default function Segments() {
  return (
    <section className="seg" id="segmentos">
      <div className="wrap">
        <h2>Gelo para o seu negócio</h2>
        <ul>
          {ITEMS.map(([icon, title, text]) => (
            <li key={title}>
              <Icon n={icon} />
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ul>
        <div className="more">
          <p>Tem um estabelecimento? Consulte as condições de fornecimento.</p>
          <a className="btn btn-navy" href={wa('forn')} target="_blank" rel="noopener">Consultar fornecimento</a>
        </div>
      </div>
    </section>
  )
}
