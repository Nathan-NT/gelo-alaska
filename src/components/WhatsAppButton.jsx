import Icon from './Icon.jsx'
import { wa } from '../lib/whatsapp.js'

export default function WhatsAppButton() {
  return (
    <a className="fab" href={wa('geral')} target="_blank" rel="noopener" aria-label="Falar com a Gelo Alaska no WhatsApp">
      <Icon n="wa" />
    </a>
  )
}
