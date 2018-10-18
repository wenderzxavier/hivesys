import React from 'react'

const MenuStyle = (props) => (
    <div id={props.menuStyle}>
        {props.menuStyle === 'menu-mobile' ? <a href='#close' className='close-menu'><i class="fas fa-chevron-left fa-lg close-btn"></i></a> : ''}
        <a href='#home' className={props.linkStyle}>Home</a>
        <a href='#services' className={props.linkStyle}>Serviços</a>
        <a href='#about' className={props.linkStyle}>Sobre</a>
        <a href='#portfolio' className={props.linkStyle}>Projetos</a>
        <a href='#contact' className={props.linkStyle}>Contato</a>
        <a href='https://hivesys.freshdesk.com/helpdesk' className={props.linkStyle}>Suporte</a>
    </div>
)

export default MenuStyle