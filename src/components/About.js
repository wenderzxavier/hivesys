import React from 'react'
import logo from '../img/logoEstilizada.png'
import about from '../img/about.jpg'
import { about1, about2 } from '../utils/AboutData'
import '../css/index.css'

const About = () => (
    <section id='about'>
        <div>
            <header className='section-header'>
                <h1 className='section-title about-heading'>Sobre a HiveSys</h1><span id='about-line' className='title-line'></span>
            </header>
            <div id='about01' className='flex-content'>
                <img src={logo} alt='HiveSys Custom Logo' className='about-img' />
                <div className='flex-content flex-column'>
                    {about1.map((data, key) => (
                        <div key={key} className='flex-content content-positioning'>
                            <img src={data.icon} alt='Hive icon' className='about-icon'></img>
                            <div className='about-text'>
                                <p className='about-title'>{data.title}</p>
                                <p className='about-details'>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div id='about02'>
            <header className='section-header header-left'>
                <h1 className='section-title about-heading'>mais sobre a empresa</h1><span id='about-line' className='title-line'></span>
            </header>
            <div className='flex-content'>
                <div className='flex-content flex-column'>
                    {about2.map((data, key) => (
                        <div className='flex-content content-positioning'>
                            <img src={data.icon} alt='Hive icon' className='about-icon'></img>
                            <div className='about-text'>
                                <p className='about-title'>{data.title}</p>
                                <p className='about-details'>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <img id='about-img2' src={about} alt='HiveSys Custom Logo' className='about-img' />
            </div>
        </div>
    </section>
)

export default About