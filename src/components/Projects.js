import React from 'react'
import PortfolioData from '../utils/PortfolioData'

const Projects = () => (
    <section id='portfolio'>
        {PortfolioData.map((project, key) => (
            key % 2 === 0 ?
                <div key={key} className='project left-right'>
                    <div><img src={project.img} alt='Hivesys logo with the project company logo' className='project-icon'></img></div>
                    <div className='project-details'>
                        <header className='section-header'><h1 className='section-title portfolio-header'>{project.company}</h1><span id='about-line' className='title-line'></span></header>
                        <p>{project.heading}</p>
                        {project.services === '' ? '' : <p><strong>Serviços:</strong> {project.services}</p>}
                        {project.benefits === '' ? '' : <p><strong>Benefícios:</strong> {project.benefits}</p>}
                    </div>
                </div> :
                <div key={key} className='project right-left'>
                    <div className='project-details'>
                        <header className='section-header'><h1 className='section-title portfolio-header'>{project.company}</h1><span id='about-line' className='title-line'></span></header>
                        <p>{project.heading}</p>
                        {project.services === '' ? '' : <p><strong>Serviços:</strong> {project.services}</p>}
                        {project.benefits === '' ? '' : <p><strong>Benefícios:</strong> {project.benefits}</p>}
                    </div>
                    <div><img src={project.img} alt='Hivesys logo with the project company logo' className='project-icon'></img></div>
                </div>
        ))}
    </section>
)

export default Projects