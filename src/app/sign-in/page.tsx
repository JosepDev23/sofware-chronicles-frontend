'use client'
import React, { useContext, useState } from 'react'
import style from './sign-in.module.css'
import CustomInput from '@/components/custom-input/custom-input'
import CustomButton from '@/components/custom-button/custom-button'
import UserService from '@/services/user/user-service'
import { AuthContext } from '@/hooks/ AuthContext'

const SignIn: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  const { loggedUser, setLoggedUser } = useContext(AuthContext)

  async function handleClickConfirm() {
    const registeredUser = await UserService.register({
      phoneNumber,
      username,
      password,
    })
    setLoggedUser(registeredUser)
  }

  return (
    <div className={style.signin_wrapper}>
      {loggedUser ? (
        <h2>User already logged</h2>
      ) : (
        <>
          <h2>Welcome!</h2>
          <div className={style.input_box}>
            <label className={style.input_label}>Phone number</label>
            <CustomInput
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
            />
          </div>
          <div className={style.input_box}>
            <label className={style.input_label}>Username</label>
            <CustomInput
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
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
        </>
      )}
    </div>
  )
}

export default SignIn
