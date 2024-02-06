import React from 'react'
import style from './custom-input.module.css'

interface CustomInputProps {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur: React.FocusEventHandler<HTMLInputElement>
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <input
      className={style.input_wrapper}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  )
}

export default CustomInput
