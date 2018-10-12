import React from 'react'
import hiveGroupData from '../utils/HiveGroupData'
import img from '../img/grupoHive.jpg'

const HiveGroup = () => (
    <section id='hive-group' className='flex'>
        <div id='hivegroup-info' className='content-left'>
        <h2 className='subheading orange'>{hiveGroupData.subheading}</h2>
            <header>
                <h1 id='heading-hive'>{hiveGroupData.title}</h1>
            </header>
            <p className='hivegroup-description'>{hiveGroupData.paragraph1}</p>
        </div>
        <img id='hivegroup-img' className='content-right' src={img} alt='Four hands joining with clenched fists'></img>
    </section>
)

export default HiveGroup