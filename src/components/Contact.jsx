import Icon from './Icon.jsx'

export default function Contact() {
  return (
    <section className="con" id="contato">
      <div className="wrap">
        <h2>Contato</h2>
        <dl>
          <div>
            <Icon n="pin" />
            <span><dt>Endereço</dt><dd>Rua José Antônio do Rio, 52<br />Bela Vista do Paraíso – PR</dd></span>
          </div>
          <div>
            <Icon n="wa" />
            <span><dt>Telefone / WhatsApp</dt><dd><a href="tel:+5543991280638">(43) 99128-0638</a></dd></span>
          </div>
          <div>
            <Icon n="mail" />
            <span><dt>E-mail</dt><dd><a href="mailto:contatogeloalaska@gmail.com">contatogeloalaska@gmail.com</a></dd></span>
          </div>
          <div>
            <Icon n="ig" />
            <span><dt>Instagram</dt><dd><a href="https://www.instagram.com/geloalaska.oficial/" target="_blank" rel="noopener">@geloalaska.oficial</a></dd></span>
          </div>
          <div>
            <Icon n="globe" />
            <span><dt>Site</dt><dd><a href="https://www.geloalaska.com.br">www.geloalaska.com.br</a></dd></span>
          </div>
        </dl>
      </div>
    </section>
  )
}
