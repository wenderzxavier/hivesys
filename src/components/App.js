import React, { Component } from 'react'
import Services from './Services'
import HiveGroup from './HiveGroup'
import About from './About'

class App extends Component {
  render() {
    return (
      <main>
        <Services />
        <HiveGroup />
        <About />
      </main>
    )
  }
}

export default App