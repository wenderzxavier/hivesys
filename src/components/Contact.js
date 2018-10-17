import React from 'react'
import '../css/index.css'

const Contact = () => (
    <section id='contact' className='flex-content'>
        <div className='flex-content flex-column flex-left' id='left-panel'>
            <h1 className='contact-header'>Informações</h1>
            <p><i className='fa fa-envelope contact-icon'></i>contato@hivesys.com.br</p>
            <p><i className='fa fa-phone contact-icon'></i>Tel: +55 (31) 98562-9275</p>
            <span className='spacing'></span>
            <h1 className='contact-header'>Setor de Inovação</h1>
            <p><i className="far fa-lightbulb contact-icon"></i>startsys@hivesys.com.br</p>
        </div>
        <div className='flex-content flex-column flex-left' id='right-panel'>
            <div>
                <legend className='form-header'>Entre em Contato</legend>
            </div>
            <form>
                <div className='user-data'>
                    <input type='text' placeholder='Nome Completo*' name='name' />
                    <input type='email' placeholder='Email*' name='email' />
                    <input type='text' placeholder='Assunto*' name='subject' />
                </div>
                <div className='form-text'>
                    <textarea rows='4' placeholder='Mensagem*' />
                </div>
                <input type='Submit' id='submit' value='ENVIAR'></input>
            </form>
        </div>
    </section>
)

export default Contact