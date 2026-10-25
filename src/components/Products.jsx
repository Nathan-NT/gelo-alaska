import p3 from '../assets/p3.webp'
import p5 from '../assets/p5.webp'
import Icon from './Icon.jsx'
import { wa } from '../lib/whatsapp.js'

const PRODUCTS = [
  { key: 'g3', img: p3, kg: 3, w: 360, h: 485, text: 'Opção prática para consumo e diferentes ocasiões.' },
  { key: 'g5', img: p5, kg: 5, w: 460, h: 610, text: 'Opção para quem precisa de uma quantidade maior de gelo.' },
]

export default function Products() {
  return (
    <section className="prod" id="produtos">
      <div className="wrap">
        <div className="sec-h">
          <h2>Gelo para cada ocasião</h2>
          <p>Escolha a embalagem ideal para sua necessidade.</p>
        </div>
        <div className="cards">
          {PRODUCTS.map((p) => (
            <article className="card" key={p.key}>
              <div className="ph">
                <img src={p.img} alt={`Embalagem de gelo Gelo Alaska de ${p.kg} kg, peso líquido`} width={p.w} height={p.h} loading="lazy" />
              </div>
              <div className="bd">
                <h3>Gelo Alaska {p.kg} kg</h3>
                <span className="w">Peso líquido: {p.kg} kg</span>
                <p>{p.text}</p>
                <a className="btn btn-wa" href={wa(p.key)} target="_blank" rel="noopener">
                  <Icon n="wa" />Pedir gelo de {p.kg} kg
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
