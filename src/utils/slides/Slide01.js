import React, { Component } from 'react'
import logoSlide from '../../img/logo-slide-01.png'

class Slide01 extends Component {
    render() {
        return (
            <div id='slide1'>
                <div className='slider-content'>
                    <h1 className='title-slider-1'>Seja Bem-Vindo à</h1>
                    <div className='subtitle-slider-1'>HIVE<span className='subtitle-slider-1-diff'>sys</span></div>
                    <h3 className='description-slider-1'>A empresa de tecnologia com objetivo de tornar a sua empresa melhor e mais inteligente</h3>
                </div>
                <img className='img-slide-1' src={logoSlide} alt='Custom logo the'></img>
            </div>
        )
    }
}

export default Slide01