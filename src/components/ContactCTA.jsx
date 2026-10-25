import Icon from './Icon.jsx'
import { wa } from '../lib/whatsapp.js'

export default function ContactCTA() {
  return (
    <section className="cta" aria-labelledby="cta-t">
      <div className="wrap">
        <h2 id="cta-t">Precisa de gelo? Fale com a Gelo Alaska!</h2>
        <p>Entre em contato com nossa equipe e consulte as opções de atendimento para sua necessidade.</p>
        <a className="btn btn-wa" href={wa('cta')} target="_blank" rel="noopener">
          <Icon n="wa" />Solicitar atendimento pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
