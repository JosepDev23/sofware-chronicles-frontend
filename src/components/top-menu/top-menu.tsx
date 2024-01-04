'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import style from './top-menu.module.css'
import CustomButton from '../custom-button/custom-button'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/hooks/AuthContext'

const TopMenu: React.FC = () => {
  const APPLICATION_TITLE = 'Software Chronicles'

  const navigator = useRouter()
  const { loggedUser } = useContext(AuthContext)

  function handleClickSignIn() {
    navigator.replace('/sign-in')
  }

  function handleClickLogIn() {
    navigator.replace('/log-in')
  }

  return (
    <header className={style.header_wrapper}>
      <Link href="/">
        <h1 className={style.app_title}>{APPLICATION_TITLE}</h1>
      </Link>
      {loggedUser ? (
        <h2>Welcome back {loggedUser.user.username}</h2>
      ) : (
        <div className={style.buttons_wrapper}>
          <CustomButton label="Sign In" onClick={handleClickSignIn} />
          <CustomButton label="Log In" onClick={handleClickLogIn} />
        </div>
      )}
    </header>
  )
}

export default TopMenu
