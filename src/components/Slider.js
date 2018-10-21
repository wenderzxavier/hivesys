import React, { Component } from 'react'
import slides from '../utils/Slide'

class Slider extends Component {
    state = {
        currentSlide: slides[0]
    }

    changeSlide(prevSlide, nextSlide, slideId) {
        prevSlide.classList.remove('bullet-active')
        nextSlide.classList.add('bullet-active')
        this.setState({
            currentSlide: slides[slideId]
        })
    }

    componentDidMount() {
        let slide0 = document.getElementById('slide-id-0')
        let slide1 = document.getElementById('slide-id-1')
        slide0.classList.add('bullet-active')
        slide0.addEventListener('click', ()=> {
            this.changeSlide(slide1, slide0, 0)
        })

        slide1.addEventListener('click', ()=> {
            this.changeSlide(slide0, slide1, 1)
        })

        setInterval(()=> {
            this.changeSlide(slide1, slide0, 0)
        }, 5000)

        setInterval(()=> {
            this.changeSlide(slide0, slide1, 1)
        }, 10000)

        /*
        
        document
          .querySelectorAll('ul.submenu_1.menushow, ul.submenu_1 .menushow')
          .forEach(function(el) {
            el.classList.remove('menushow');
          })
        
        
          
        <ul class="submenu_1 menushow">
          <li class="sub">
              <ul class="submenu_2 menushow">
                  <li>
                      <ul class="submenu_2 menushow">
                          <li>
                              <ul class="submenu_2 menushow">
                                  <li></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li></li>
              </ul>
          </li>
        </ul>
        */

    }

    render() {
        const { currentSlide } = this.state
        return (
            <section id='slider'>
                {currentSlide}
                <div id='slider-selector'>
                    {slides.map((slide, key) => (
                        <div id={`slide-id-${key}`} key={key} className='slide-bullet'><span className='slider-btn'></span></div>
                    ))}
                </div>
            </section>
        )
    }
}

export default Slider