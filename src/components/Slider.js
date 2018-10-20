import React, { Component } from 'react'
import Slide2 from '../utils/slides/Slide02'

class Slider extends Component {
    render() {
        return (
            <section id='slider'>
                <Slide2 />
                <div id='slider-selector'>
                    <div className='slide-bullet'><span className='slider-btn'></span></div>
                    <div className='slide-bullet'><span className='slider-btn'></span></div>
                </div>
            </section>
        )
    }
}

export default Slider