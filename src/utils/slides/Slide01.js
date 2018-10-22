import React, { Component } from 'react'
import logoSlide from '../../img/logo-slide-01.png'

class Slide01 extends Component {
    moveElements(followX, followY) {
        let x = followX * 2
        let y = followY * 2

        let translate = `translate3d(${x}px, ${y}px, 0px) scale(1.1)`

        document.querySelector('.img-slide-1').style.transform = translate

        x = x / 2
        y = y / 2

        translate = `translate3d(${x}px, ${y}px, 0px)`
        document.querySelector('.subtitle-slider-1').style.transform = translate
    }

    componentDidMount() {
        document.getElementById('slide1').addEventListener('mousemove', (e) => {
            let mouseX = Math.max(-100, Math.min(100, document.documentElement.clientWidth / 2 - e.clientX))
            let mouseY = Math.max(-100, Math.min(100, document.documentElement.clientHeight / 2 - e.clientY))
            let followX = (20 * mouseX) / 100
            let followY = (10 * mouseY) / 100

            this.moveElements(followX, followY)
        })

        document.getElementById('slide1').addEventListener('mouseout', (e) => {
            document.querySelector('.img-slide-1, .subtitle-slider-1').style.transform = 'none'
        })

    }

    render() {
        return (
            <div id='slide1' className='slide-position'>
                <div className='slider-content'>
                    <h1 className='title-slider-1'>Seja Bem-Vindo à</h1>
                    <div className='subtitle-slider-1'>HIVE<span className='subtitle-slider-1-diff'>sys</span></div>
                    <h3 className='description-slider-1'>A empresa de tecnologia com objetivo de tornar a sua empresa melhor e mais inteligente</h3>
                </div>
                <img className='img-slide-1' src={logoSlide} alt='Custom logo'></img>
            </div>
        )
    }
}

export default Slide01