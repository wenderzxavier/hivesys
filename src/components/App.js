import React, { Component } from 'react'
import Services from './Services'
import HiveGroup from './HiveGroup'

class App extends Component {
  render() {
    return (
      <main>
        <Services />
        <HiveGroup />
      </main>
    )
  }
}

export default App