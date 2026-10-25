import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import { wa } from '../lib/whatsapp.js'

const LINKS = [
  ['#inicio', 'Início'],
  ['#sobre', 'Sobre nós'],
  ['#produtos', 'Produtos'],
  ['#diferenciais', 'Diferenciais'],
  ['#contato', 'Contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#inicio" aria-label="Gelo Alaska – início">
          <img src={logo} alt="Gelo Alaska" width="40" height="54" />
        </a>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav
          className={'nav' + (open ? ' open' : '')}
          id="nav"
          aria-label="Principal"
          onClick={(e) => e.target.closest('a') && setOpen(false)}
        >
          {LINKS.map(([href, label]) => (
            <a key={href} className="l" href={href}>{label}</a>
          ))}
          <a className="btn btn-wa" href={wa('geral')} target="_blank" rel="noopener">Faça seu pedido</a>
        </nav>
      </div>
    </header>
  )
}
