import React, { Component } from 'react'
import logo from '../img/logo.png'
import MenuStyle from '../components/MenuStyle'

class Navbar extends Component {
    changeNavBackground = (color) => {
        document.getElementById('navigation').style.backgroundColor = color
    }

    componentDidMount() {
        let menuMobile = document.getElementById('menu-mobile')

        document.getElementById('menu-btn-mobile').addEventListener('click', () => {
            document.getElementById('block-back').style.display = 'block'
            menuMobile.style.width = '300px'
            menuMobile.style.padding = '80px 20px'

        })
        document.getElementById('block-back').addEventListener('click', () => {
            document.getElementById('block-back').style.display = 'none'
            menuMobile.style.width = '0'
            menuMobile.style.padding = '0'
        })

        document.getElementById('close-menu').addEventListener('click', () => {
            document.getElementById('block-back').style.display = 'none'
            menuMobile.style.width = '0'
            menuMobile.style.padding = '0'
        })

        window.onscroll = () => {
            (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) ?
                this.changeNavBackground('#352245') : this.changeNavBackground('transparent')
        }
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