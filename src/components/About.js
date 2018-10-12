import React from 'react'
import logo from '../img/logoEstilizada.png'
import hive from '../img/about-hive.svg'
import about from '../img/about.jpg'
import '../css/index.css'

const About = () => (
    <section id='about'>
        <div id='about-01'>
            <header className='section-header'>
                <h1 className='section-title about-heading'>Sobre a HiveSys</h1><span id='about-line' className='title-line'></span>
            </header>
            <div className='flex-content about-info'>
                <img src={logo} alt='HiveSys Custom Logo' className='about-img' />
                <div className='flex-content flex-column'>
                    <div className='flex-content content-positioning'>
                        <img src={hive} alt='Hive icon' className='about-icon'></img>
                        <div className='about-text'>
                            <p className='about-title'>Empresa Legitimamente Mineira</p>
                            <p className='about-details'>A HiveSys nasceu de um grupo de belo-horizontinos que queriam expandir seu horizonte. Sempre dispostos a aceitar um desafio, e apaixonados por tecnologia.</p>
                        </div>
                    </div>
                    <div className='flex-content content-positioning'>
                        <img src={hive} alt='Hive icon' className='about-icon'></img>
                        <div className='about-text'>
                            <p className='about-title'>Empresa Legitimamente Mineira</p>
                            <p className='about-details'>A HiveSys nasceu de um grupo de belo-horizontinos que queriam expandir seu horizonte. Sempre dispostos a aceitar um desafio, e apaixonados por tecnologia.</p>
                        </div>
                    </div>
                    <div className='flex-content content-positioning'>
                        <img src={hive} alt='Hive icon' className='about-icon'></img>
                        <div className='about-text'>
                            <p className='about-title'>Empresa Legitimamente Mineira</p>
                            <p className='about-details'>A HiveSys nasceu de um grupo de belo-horizontinos que queriam expandir seu horizonte. Sempre dispostos a aceitar um desafio, e apaixonados por tecnologia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='about02'>
            <header className='section-header'>
                <h1 className='section-title about-heading'>mais sobre a empresa</h1><span id='about-line' className='title-line'></span>
            </header>
            <div className='flex-content about-info'>
                <div className='flex-content flex-column'>
                    <div className='flex-content content-positioning'>
                        <img src={hive} alt='Hive icon' className='about-icon'></img>
                        <div className='about-text'>
                            <p className='about-title'>Empresa Legitimamente Mineira</p>
                            <p className='about-details'>A HiveSys nasceu de um grupo de belo-horizontinos que queriam expandir seu horizonte. Sempre dispostos a aceitar um desafio, e apaixonados por tecnologia.</p>
                        </div>
                    </div>
                    <div className='flex-content content-positioning'>
                        <img src={hive} alt='Hive icon' className='about-icon'></img>
                        <div className='about-text'>
                            <p className='about-title'>Empresa Legitimamente Mineira</p>
                            <p className='about-details'>A HiveSys nasceu de um grupo de belo-horizontinos que queriam expandir seu horizonte. Sempre dispostos a aceitar um desafio, e apaixonados por tecnologia.</p>
                        </div>
                    </div>
                    <div className='flex-content content-positioning'>
                        <img src={hive} alt='Hive icon' className='about-icon'></img>
                        <div className='about-text'>
                            <p className='about-title'>Empresa Legitimamente Mineira</p>
                            <p className='about-details'>A HiveSys nasceu de um grupo de belo-horizontinos que queriam expandir seu horizonte. Sempre dispostos a aceitar um desafio, e apaixonados por tecnologia.</p>
                        </div>
                    </div>
                </div>
                <img id='about-img2' src={about} alt='HiveSys Custom Logo' className='about-img' />
            </div>
        </div>
    </section>
)

export default About