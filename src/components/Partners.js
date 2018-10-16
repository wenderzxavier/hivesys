import React from 'react'
import partnersLogo from '../utils/PartnersLogo'
import '../css/index.css'

const Partners = () => (
    <div id='partners'>
        <header className='section-header header-center'>
            <h1 className='section-title about-heading'>Parceiros</h1><span id='about-line' className='title-line'></span>
        </header>
        <div className='slider'>
            <div className='slide'>
                {partnersLogo.map((data, key) => (
                    <div key={key} className='partner'>
                        <img src={data} alt=''></img>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Partners