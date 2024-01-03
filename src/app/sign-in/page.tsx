'use client'
import React, { useState } from 'react'
import style from './sign-in.module.css'
import CustomInput from '@/components/custom-input/custom-input'
import CustomButton from '@/components/custom-button/custom-button'

const SignIn: React.FC = () => {
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  function handleClickConfirm() {}

  return (
    <div className={style.signin_wrapper}>
      <h2>Welcome!</h2>
      <div className={style.input_box}>
        <label className={style.input_label}>Phone number</label>
        <CustomInput
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        />
      </div>
      <div className={style.input_box}>
        <label className={style.input_label}>Password</label>
        <CustomInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className={style.input_box}>
        <label className={style.input_label}>Confirm password</label>
        <CustomInput
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value)
          }}
        />
      </div>
      <div className={style.button_box}>
        <CustomButton label="Confirm" onClick={handleClickConfirm} />
      </div>
    </div>
  )
}

export default SignIn
