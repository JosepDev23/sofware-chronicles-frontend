import React from 'react'
import style from './custom-input.module.css'

interface CustomInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <input
      className={style.input_wrapper}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default CustomInput
