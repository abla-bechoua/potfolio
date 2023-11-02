import React from 'react'
import "./scrollUp.css"

export const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollUp");
        if (this.scrollY >= 860) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show_scroll");
    });
  return (
    <a href=' #' className='scrollUp'>
        <i className='uil uil-arrow-up scrollUp__icon'></i>
    </a>
  )
}
