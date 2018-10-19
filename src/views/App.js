import React from 'react'
import Slider from '../components/Slider'
import Services from '../components/Services'
import HiveGroup from '../components/HiveGroup'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = () => (
  <div>
    <header>
      <Slider />
    </header>
    <main>
      <Navbar />
      <Services />
      <HiveGroup />
      <About />
      <Partners />
    </main>
    <footer>
      <Contact />
      <Footer />
    </footer>
  </div>
)

export default App