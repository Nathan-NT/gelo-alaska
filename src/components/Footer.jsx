import logo from '../assets/logo.webp'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <a href="#inicio" aria-label="Gelo Alaska – topo">
          <img src={logo} alt="Gelo Alaska" width="62" height="84" loading="lazy" />
        </a>
        <nav aria-label="Rodapé">
          <h3>Navegação</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div>
          <h3>Gelo Alaska</h3>
          <ul>
            <li>Rua José Antônio do Rio, 52 – Bela Vista do Paraíso – PR</li>
            <li><a href="tel:+5543991280638">(43) 99128-0638</a></li>
            <li><a href="mailto:contatogeloalaska@gmail.com">contatogeloalaska@gmail.com</a></li>
            <li><a href="https://www.instagram.com/geloalaska.oficial/" target="_blank" rel="noopener">@geloalaska.oficial</a></li>
          </ul>
        </div>
        <p className="c">
            © {new Date().getFullYear()} Gelo Alaska. Todos os direitos reservados.
            <br />
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/nathanntmiranda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NathanNT
            </a>
        </p>
      </div>
    </footer>
  )
}
