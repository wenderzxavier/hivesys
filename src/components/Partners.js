import React from 'react'
import partnersLogo from '../utils/PartnersLogo'
import '../css/index.css'

const Partners = () => (
    <section id='partners'>
        <header className='section-header header-center'>
            <h1 className='section-title about-heading'>Parceiros</h1><span id='about-line' className='title-line'></span>
        </header>
        <div className='slider'>
            <div className='slide'>
                {partnersLogo.map((data, key) => (
                    <div key={key} className='partner'>
                        <img src={data} alt='logo'></img>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Partners