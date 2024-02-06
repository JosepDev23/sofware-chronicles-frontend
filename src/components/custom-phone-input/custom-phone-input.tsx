import React from 'react'
import PhoneInput from 'react-phone-number-input'
import './styles.css'

interface CustomInputPhoneProps {
  value: string
  onChange: (value: string) => void
  onBlur: (event: React.FocusEvent<HTMLElement, Element>) => void
}

const CustomInputPhone: React.FC<CustomInputPhoneProps> = (props) => {
  return (
    <PhoneInput
      value={props.value}
      onChange={(e) => {
        props.onChange(e?.toString()!)
      }}
      onBlur={props.onBlur}
    />
  )
}

export default CustomInputPhone
