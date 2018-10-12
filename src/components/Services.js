import React from 'react'
import serviceData from '../utils/ServicesData'

const Services = () => (
    <section id='services'>
        <header className='section-header'>
            <span className='title-line'></span><h1 className='section-title'>Serviços</h1>
        </header>
        <div id='service-info' className='flex'>
            {serviceData.map((service, key) => (
                <div key={key} className='service-card'>
                    <img src={service.icon} alt='Two person icon' className='service-icon'></img>
                    <h3 className='service-title'>{service.type}</h3>
                    <p className='service-description'>{service.text}</p>
                </div>
            ))}
        </div>
    </section>
)

export default Services