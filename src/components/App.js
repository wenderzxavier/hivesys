import React, { Component } from 'react'
import Services from './Services'
import HiveGroup from './HiveGroup'
import About from './About'
import Partners from './Partners'

class App extends Component {
  render() {
    return (
      <main>
        <Services />
        <HiveGroup />
        <About />
        <Partners />
      </main>
    )
  }
}

export default App