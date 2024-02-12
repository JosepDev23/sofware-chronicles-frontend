'use client'
import React, { useState } from 'react'
import style from './sign-in.module.css'
import CustomInput from '@/components/custom-input/custom-input'
import CustomButton from '@/components/custom-button/custom-button'
import UserService from '@/services/user/user-service'
import { useRouter } from 'next/navigation'
import CustomInputPhone from '@/components/custom-phone-input/custom-phone-input'
import ValidatorService from '@/services/validator/validator-service'

const SignIn: React.FC = () => {
  const navigator = useRouter()
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] =
    useState<boolean>(false)
  const [isInvalidUsername, setIsInvalidUsername] = useState<boolean>(false)
  const [isInvalidPassword, setIsInvalidPassword] = useState<boolean>(false)
  const [isInvalidPasswordConfirm, setIsInvalidPasswordConfirm] =
    useState<boolean>(false)

  async function handleClickConfirm() {
    if (
      ValidatorService.validatePhoneNumber(phoneNumber) &&
      password === passwordConfirm &&
      ValidatorService.validatePassword(password)
    ) {
      const registeredUser = await UserService.register({
        phoneNumber,
        username,
        password,
      })
      navigator.replace('/')
    }
  }

  return (
    <div className={style.signin_wrapper}>
      <h2>Welcome!</h2>
      <div className={style.input_box}>
        <label className={style.input_label}>Phone number</label>
        <div className={style.input_inner_wrapper}>
          <CustomInputPhone
            value={phoneNumber}
            onChange={setPhoneNumber}
            onBlur={(e) => {
              setIsInvalidPhoneNumber(
                !ValidatorService.validatePhoneNumber(phoneNumber)
              )
            }}
          />
          {isInvalidPhoneNumber && <i className="material-icons">warning</i>}
        </div>
      </div>
      <div className={style.input_box}>
        <label className={style.input_label}>Username</label>
        <div className={style.input_inner_wrapper}>
          <CustomInput
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            onBlur={(e) => {
              setIsInvalidUsername(
                !ValidatorService.validateUsername(e.target.value)
              )
            }}
          />
          {isInvalidUsername && <i className="material-icons">warning</i>}
        </div>
      </div>
      <div className={style.input_box}>
        <label className={style.input_label}>Password</label>
        <div className={style.input_inner_wrapper}>
          <CustomInput
            typePassword
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            onBlur={(e) => {
              setIsInvalidPassword(
                !ValidatorService.validatePassword(e.target.value)
              )
            }}
          />
          {isInvalidPassword && <i className="material-icons">warning</i>}
        </div>
      </div>
      <div className={style.input_box}>
        <label className={style.input_label}>Confirm password</label>
        <div className={style.input_inner_wrapper}>
          <CustomInput
            typePassword
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value)
            }}
            onBlur={(e) => {
              setIsInvalidPasswordConfirm(
                !ValidatorService.validatePassword(e.target.value)
              )
            }}
          />
          {isInvalidPasswordConfirm && (
            <i className="material-icons">warning</i>
          )}
        </div>
      </div>
      <div className={style.button_box}>
        <CustomButton label="Confirm" onClick={handleClickConfirm} />
      </div>
    </div>
  )
}

export default SignIn
