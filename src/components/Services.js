import React from 'react'
import socialNetwork from '../img/service-social-network.png'

const Services = () => (
    <section>
        <header className='section-header'>
            <span className='title-line'></span><h1 className='section-title'>Serviços</h1>
        </header>
        <div id='services'>
            <div className='service-card'>
                <img src={socialNetwork} alt='Two person icon' className='service-icon'></img>
                <h3 className='service-title'>Mídias Sociais</h3>
                <p className='service-description'>Realizamos toda a gestão de mídias sociais, desde SEO, Marketing Digital, até a criação e produção de conteúdo.</p>
            </div>
            <div className='service-card'>
                <img src={socialNetwork} alt='Two person icon' className='service-icon'></img>
                <h3 className='service-title'>Mídias Sociais</h3>
                <p className='service-description'>Realizamos toda a gestão de mídias sociais, desde SEO, Marketing Digital, até a criação e produção de conteúdo.</p>
            </div>
        </div>
    </section>
)

export default Services