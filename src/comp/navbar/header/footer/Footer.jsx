import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <footer className='footer'>
  <div className='footer__container container'>
  <h1 className='footer__title'>Abla</h1>
  <ul className='footer__list'>
    <li>
        <a href='#about' className='footer__link'>About</a>
    </li>
    <li>
        <a href='#qualification' className='footer__link'>Qualification</a>
    </li>
    <li>
        <a href='#portfolio' className='footer__link'>Projects</a>
    </li>
 
  </ul>
  <div className='footer__social'>
  <a href=' https://instagram.com/abla_web_39?igshid=MzMyNGUyNmU2YQ==' className='footer__social-icon' target='_blank'>
    <i class="bx bxl-instagram"></i>
    </a>
    <a href=' https://www.facebook.com/profile.php?id=100022842430133' className='footer__social-icon' target='_blank'>
    <i class="bx bxl-facebook"></i>
    </a>
    <a href=' https://www.linkedin.com/in/ab-la-689360225' className='footer__social-icon' target='_blank'>
    <i class="bx bxl-linkedin"></i>
    </a>
  </div>
    <span className='footer__copy'>&#169; Abla. All rigths reserved</span>
  </div>
    </footer>
  )
}
