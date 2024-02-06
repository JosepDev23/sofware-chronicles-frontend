'use client'
import React, { useContext, useState } from 'react'
import style from './log-in.module.css'
import { AuthContext } from '@/hooks/AuthContext'
import CustomInput from '@/components/custom-input/custom-input'
import CustomButton from '@/components/custom-button/custom-button'
import UserService from '@/services/user/user-service'
import { useRouter } from 'next/navigation'
import CustomInputPhone from '@/components/custom-phone-input/custom-phone-input'
import ValidatorService from '@/services/validator/validator-service'

const LogIn: React.FC = () => {
  const navigator = useRouter()
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] =
    useState<boolean>(false)
  const [isInvalidPassword, setIsInvalidPassword] = useState<boolean>(false)

  const { loggedUser, setLoggedUser } = useContext(AuthContext)

  async function handleClickConfirm() {
    if (
      ValidatorService.validatePhoneNumber(phoneNumber) &&
      ValidatorService.validatePassword(password)
    ) {
      const newLoggedUser = await UserService.login({ phoneNumber, password })
      localStorage.setItem('token', newLoggedUser.token)
      localStorage.setItem('user', JSON.stringify(newLoggedUser.user))
      setLoggedUser(newLoggedUser)
      navigator.replace('/your-chronicle')
    }
  }

  return (
    <div className={style.login_wrapper}>
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
        <label className={style.input_label}>Password</label>
        <div className={style.input_inner_wrapper}>
          <CustomInput
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
      <div className={style.button_box}>
        <CustomButton label="LogIn" onClick={handleClickConfirm} />
      </div>
    </div>
  )
}

export default LogIn
