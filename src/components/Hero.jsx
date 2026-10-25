import hero from '../assets/hero.webp'
import Icon from './Icon.jsx'
import { wa } from '../lib/whatsapp.js'

const POINTS = [
  ['drop', 'Água potável filtrada'],
  ['shield', 'Qualidade e cuidado na produção'],
  ['snow', 'Gelo para diferentes ocasiões e necessidades'],
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <picture>
        <img
          className="bg"
          src={hero}
          alt="Embalagens de gelo Alaska de 5 kg e 3 kg sobre blocos de gelo, diante de montanhas nevadas"
          width="2048"
          height="768"
          fetchPriority="high"
        />
      </picture>
      <div className="wrap">
        <div className="hero-t">
          <h1>O gelo que você confia!</h1>
          <p className="lead">
            Gelo de qualidade, produzido com água potável filtrada, para levar mais praticidade e confiança ao seu negócio.
          </p>
          <ul className="pts">
            {POINTS.map(([icon, text]) => (
              <li key={text}><Icon n={icon} />{text}</li>
            ))}
          </ul>
          <div className="cta-row">
            <a className="btn btn-wa" href={wa('geral')} target="_blank" rel="noopener">
              <Icon n="wa" />Faça seu pedido pelo WhatsApp
            </a>
            <a className="btn btn-ghost" href="#produtos">Conheça nossos produtos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
