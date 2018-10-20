import React, { Component } from 'react'
import globe from '../../img/globe-slide-02.png'

class Slide02 extends Component {
    render() {
        return (
            <div id='slide2' className='slide-position'>
                <span className='back-content' id='back-name'>HIVE</span>
                <img className='back-content' id='img-slide-2' src={globe} alt='Globe Shape'></img>
                <div id='text-slide-2'>
                    <i className="far fa-check-circle icon-slide"></i>
                    <div className='slide-2-text'>A solução</div>
                    <div className='slide-2-em'>CERTA</div>
                    <div className='slide-2-text'>para você</div>
                    <div className='slide-2-description'>Consulte nossos serviços abaixo ou se preferir, nos envie um email com sua dúvida que entraremos em contato.</div>
                </div>
            </div>
        )
    }
}

export default Slide02