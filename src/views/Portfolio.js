import React from 'react'
import PageHeader from '../components/PageHeader'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Portfolio = () => (
    <div>
        <header><Navbar /><PageHeader title='Portfólio' /></header>
        <main>
            <Projects />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default Portfolio