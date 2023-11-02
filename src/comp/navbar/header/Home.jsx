import React from 'react'
import "./home.css"
import Socail from './Socail'
import Data from './Data'
import Scorldawn from './Scorldawn'
export const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
           <Socail></Socail>   
           <div className='home__img'></div>
            <Data></Data>
         </div>
         <Scorldawn></Scorldawn>
     </div>

    </section>
  )
}
