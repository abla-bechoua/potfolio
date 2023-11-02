import React, { useState } from 'react'
import "./qualification.css"
export const Qualification = () => {
   const [toggleState, setToggleState] = useState(1);

   const toggleTab= (index) =>{
      setToggleState(index);
   }
  return (
    <section className='qualification section' id='qualification'>
    <h2 className='section__title'>Qualification</h2>
    <span className='section__subtitle'>My personal journey</span>
    <span className='section__subtitle'>Click on Education or Experience  <i class="uil uil-arrow-down home__scroll-arrow"></i></span>
    <div className='qualification__container container '>
     <div className='qualification__tabs'>

      <div className={toggleState === 1 ?"qualification__button qualification__active button--flex" :"qualification__button button--flex "}
      onClick={() => toggleTab(1)}>
        <i className='uil uil-graduation-cap qualification__icon'></i>Education
      </div>
      <div className={toggleState === 2 ?"qualification__button qualification__active button--flex" :"qualification__button button--flex "}
      onClick={() => toggleTab(2)}>
        <i className='uil uil-briefcase-alt qualification__icon'></i>Experience
      </div>
     </div>
     <div className='qualification__sections'>
     <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>

     <div className='qualification__data'>
      <div>
        <h3 className='qualification__title'>Bachelor of Information System</h3>
        <span className='qualification__subtitle'>Faculty of Exact Sciences</span>
        <div className='qualification__calender'>
          <i className='uil uil-calendar-alt'></i>2019 - present
        </div>
      </div>
      <div>
      <span className='qualification__rounder'></span>
      <span className='qualification__line'></span>
      </div>
     </div>

     <div className='qualification__data'>
     <div></div>

      
     </div>
     <div className='qualification__data'>
      <div>
        <h3 className='qualification__title'> Master degree in artificial intelligence</h3>
        <span className='qualification__subtitle'>Faculty of Exact Sciences</span>
        <div className='qualification__calender'>
          <i className='uil uil-calendar-alt'></i>2023 - present
        </div>
      </div>
      <div>
      <span className='qualification__rounder'></span>
      <span className='qualification__line'></span>
      </div>
     </div>

     <div className='qualification__data'>
     <div></div>

     </div>
     </div>

     <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>

     <div className='qualification__data'>
     <div>
        <h3 className='qualification__title'> study web development</h3>
        <span className='qualification__subtitle'>Faculty of Exact Sciences</span>
        <div className='qualification__calender'>
          <i className='uil uil-calendar-alt'></i>2020 - present
        </div>
      </div>
      <div>
      <span className='qualification__rounder'></span>
      <span className='qualification__line'></span>
      </div>
     </div>

     <div className='qualification__data'>
     <div></div>

     <div>
      <span className='qualification__rounder'></span>
      <span className='qualification__line'></span>
      </div>

      <div>
        <h3 className='qualification__title'>Responsive Design</h3>
        <span className='qualification__subtitle'>Faculty of Exact Sciences</span>
        <div className='qualification__calender'>
          <i className='uil uil-calendar-alt'></i>2020 - present
        </div>
      </div>
     </div>
     <div className='qualification__data'>
      <div>
        <h3 className='qualification__title'>web development</h3>
        <span className='qualification__subtitle'>experience 3years</span>
        <div className='qualification__calender'>
          <i className='uil uil-calendar-alt'></i>2020 - present
        </div>
      </div>
      <div>
      <span className='qualification__rounder'></span>
      <span className='qualification__line'></span>
      </div>
     </div>
     </div>
     </div>
    </div>
    </section>
  )
}
