import React from 'react'
import partnersLogo from '../utils/PartnersLogo'
import '../css/index.css'

const Partners = () => (
    <section id='partners'>
        <header className='section-header header-center'>
            <h1 className='section-title'>Parceiros</h1><span className='title-line'></span>
        </header>
        <div id='partners-data' className='flex-content'>
            {partnersLogo.map((icon, key) => (
                <div className='icon' key={key}>
                    <img src={icon} alt='Partner logo'/>
                </div>
            ))}
        </div>  
    </section>
)

export default Partners