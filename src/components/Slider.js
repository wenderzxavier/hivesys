import React, { Component } from 'react'
import Slide1 from '../utils/slides/Slide01'

class Slider extends Component {
    render() {
        return (
            <section id='slider'>
                <Slide1 />
                <div id='slider-selector'>
                    <div className='slide-bullet'><span className='slider-btn'></span></div>
                    <div className='slide-bullet'><span className='slider-btn'></span></div>
                </div>
            </section>
        )
    }
}

export default Slider