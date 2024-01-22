'use client'
import React, { useContext, useState } from 'react'
import style from './log-in.module.css'
import { AuthContext } from '@/hooks/AuthContext'
import CustomInput from '@/components/custom-input/custom-input'
import CustomButton from '@/components/custom-button/custom-button'
import UserService from '@/services/user/user-service'
import { useRouter } from 'next/navigation'
import CustomInputPhone from '@/components/custom-phone-input/custom-phone-input'

const LogIn: React.FC = () => {
  const navigator = useRouter()
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { loggedUser, setLoggedUser } = useContext(AuthContext)

  async function handleClickConfirm() {
    const newLoggedUser = await UserService.login({ phoneNumber, password })
    localStorage.setItem('token', newLoggedUser.token)
    localStorage.setItem('user', JSON.stringify(newLoggedUser.user))
    setLoggedUser(newLoggedUser)
    navigator.replace('/your-chronicle')
  }

  return (
    <div className={style.login_wrapper}>
      <h2>Welcome!</h2>
      <div className={style.input_box}>
        <label className={style.input_label}>Phone number</label>
        <CustomInputPhone value={phoneNumber} onChange={setPhoneNumber} />
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
      <div className={style.button_box}>
        <CustomButton label="LogIn" onClick={handleClickConfirm} />
      </div>
    </div>
  )
}

export default LogIn
