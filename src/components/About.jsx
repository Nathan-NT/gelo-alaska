import logo from '../assets/logo.webp'

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap">
        <div>
          <h2>Gelo Alaska — qualidade em cada pedido</h2>
          <p>
            A Gelo Alaska é uma fábrica de gelo comprometida com a qualidade dos produtos e o atendimento aos seus clientes. Trabalhamos para oferecer praticidade e confiança a quem precisa de gelo no dia a dia, em estabelecimentos comerciais, eventos e outras ocasiões.
          </p>
        </div>
        <div className="lg">
          <img src={logo} alt="Logo Gelo Alaska: urso-polar abraçando uma montanha" width="300" height="408" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
