import React, { Component } from 'react'
import logo from '../img/logo.png'
import MenuStyle from '../components/MenuStyle'

class Navbar extends Component {
    componentDidMount() {
        document.getElementById('menu-btn-mobile').addEventListener('click', () => (
            document.getElementById('block-back').style.display = 'block'
        ))

        document.getElementById('block-back').addEventListener('click', () => (
            document.getElementById('block-back').style.display = 'none'
        ))
    }

    render() {
        return (
            <div id='navigation'>
                <nav id='navbar'>
                    <a href='www.hivesys.com.br' className='nav-logo'><img src={logo} alt='logo'></img></a>
                    <MenuStyle menuStyle='menu-top' linkStyle='nav-link' />
                    <div id='menu-btn-mobile'>
                        <span className='hamburguer'></span>
                        <span className='hamburguer'></span>
                        <span className='hamburguer'></span>
                    </div>
                    <div id='block-back'></div>
                    <MenuStyle menuStyle='menu-mobile' linkStyle='nav-mobile' />
                </nav>
            </div>
        )
    }
}

export default Navbar