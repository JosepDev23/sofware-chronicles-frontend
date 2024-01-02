import React from 'react'
import style from './custom-button.module.css'

interface CustomButtonProps {
  label: string
  onClick: () => void
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <button className={style.custom_button} onClick={props.onClick}>
      <label className={style.custom_label}>{props.label}</label>
    </button>
  )
}

export default CustomButton
