import React, { Component } from 'react'
import Services from './Services'
import HiveGroup from './HiveGroup'
import About from './About'
import Partners from './Partners'
import Contact from './Contact'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
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
  }
}

export default App