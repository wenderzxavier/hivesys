import React from 'react'
import img from '../img/grupoHive.jpg'

const HiveGroup = () => (
    <section id='hive-group' className='flex'>
        <div id='hivegroup-info' className='content-left'>
            <header>
                <h1 id='heading-hive'>Grupo Hive</h1>
            </header>
            <h2 className='subheading orange'>Todo mundo é mais inteligente junto</h2>
            <p className='hive-description'>Nas peculiaridades e habilidades de cada um de seus integrantes, a <span className='orange'>HiveSys</span>, com intuito de crescer ainda mais, tornou-se o <span className='orange'>Grupo Hive</span>.</p>
            <p className='hive-description'>O <span className='orange'>Grupo Hive</span> conta com empresas parceiras e integrantes da <span className='orange'>HiveSys</span> que auxiliam a entregar resultados mais rápido e melhores aos clientes. Além disso, com uma multitude de conselheiros, conseguimos focar também no desenvolvimento de projetos próprios.</p>
        </div>
        <img className='content-right' src={img} alt='Four hands joining with clenched fists'></img>
    </section>
)

export default HiveGroup