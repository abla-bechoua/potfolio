import React from 'react'

export const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
        <a href=" https://instagram.com/abla_web_39?igshid=MzMyNGUyNmU2YQ==" className='work__button'>
            see the project <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
    </div>
  )
}
