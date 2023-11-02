import React from 'react'
import  "./projects.css"
import { Work } from './Work'
export const Projects = () => {
  return (
    <section className='works section' id='portfolio'>
    <h2 className='section__title'>Projects</h2>
    <span className='section__subtitle'>Most recent works</span>
    <div className='skills__container container grid'>
      <Work/>
    </div>
    </section>
  )
}
