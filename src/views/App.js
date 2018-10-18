import React from 'react'
import Services from '../components/Services'
import HiveGroup from '../components/HiveGroup'
import About from '../components/About'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = () => (
  <div>
    <main>
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