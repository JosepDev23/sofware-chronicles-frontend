import React from 'react'
import style from './background-svg.module.css'

const BackgroundSVG: React.FC = () => {
  return (
    <div className={style.image_wrapper}>
      <img src="cositas.svg" />
    </div>
  )
}

export default BackgroundSVG
