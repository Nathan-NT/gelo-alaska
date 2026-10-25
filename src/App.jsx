import Sprite from './components/Sprite.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Segments from './components/Segments.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Sprite />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <About />
        <Segments />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
