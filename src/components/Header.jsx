import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import Icon from './Icon.jsx'
import { wa } from '../lib/whatsapp.js'

const P = {
  home: 'M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z',
  box: 'M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8',
  star: 'm12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z',
  close: 'M18 6 6 18M6 6l12 12',
  chev: 'm9 18 6-6-6-6',
}

const I = ({ d }) => (
  <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
)

const LINKS = [
  ['#inicio', 'Início', <I d={P.home} />],
  ['#sobre', 'Sobre nós', <Icon n="user" />],
  ['#produtos', 'Produtos', <I d={P.box} />],
  ['#diferenciais', 'Diferenciais', <I d={P.star} />],
  ['#contato', 'Contato', <Icon n="mail" />],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
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
          <div className="dr-head">
            <img src={logo} alt="Gelo Alaska" />
            <p>Gelo de qualidade<br />para o seu dia a dia</p>
            <button className="dr-close" aria-label="Fechar menu" onClick={() => setOpen(false)}>
              <I d={P.close} />
            </button>
          </div>

          <div className="dr-links">
            {LINKS.map(([href, label, icon]) => (
              <a
                key={href}
                href={href}
                className={'l' + (active === href ? ' on' : '')}
                onClick={() => setActive(href)}
              >
                {icon}{label}
              </a>
            ))}
          </div>

          <div className="dr-info">
            <a href="tel:+5543991280638"><I d={P.phone} />(43) 99128-0638</a>
            <a href="mailto:contatogeloalaska@gmail.com"><Icon n="mail" />contatogeloalaska@gmail.com</a>
            <div><Icon n="pin" /><span>Rua José Antônio do Rio, 52<br />Bela Vista do Paraíso - PR</span></div>
            <a href="https://www.instagram.com/geloalaska.oficial/" target="_blank" rel="noopener noreferrer">
              <Icon n="ig" />@geloalaska.oficial
            </a>
          </div>

          <a className="btn btn-wa" href={wa('geral')} target="_blank" rel="noopener">
            <Icon n="wa" />Faça seu pedido<I d={P.chev} />
          </a>

          <p className="dr-foot">Mais que gelo, é confiança!</p>
        </nav>

        <div className={'scrim' + (open ? ' show' : '')} onClick={() => setOpen(false)} />
      </div>
    </header>
  )
}