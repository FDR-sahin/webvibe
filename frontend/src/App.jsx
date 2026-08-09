import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechStack from './components/TechStack.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import AboutUs from './components/AboutUs.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-void text-ink font-body antialiased">
      <Navbar />
      <Hero />
      <TechStack />
      {/* <Services /> */}
      <Portfolio />
      <AboutUs />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
