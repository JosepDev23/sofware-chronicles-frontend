'use client'
import Link from 'next/link'
import React from 'react'
import style from './top-menu.module.css'
import CustomButton from '../custom-button/custom-button'
import { useRouter } from 'next/navigation'

const TopMenu: React.FC = () => {
  const APPLICATION_TITLE = 'Software Chronicles'

  const navigator = useRouter()

  function handleClickSignIn() {
    navigator.replace('/sign-in')
  }

  return (
    <>
      <header className={style.header_wrapper}>
        <Link href="/">
          <h1 className={style.app_title}>{APPLICATION_TITLE}</h1>
        </Link>
        <div className={style.buttons_wrapper}>
          <CustomButton label="Sign In" onClick={handleClickSignIn} />
          <CustomButton label="Log In" onClick={() => {}} />
        </div>
      </header>
    </>
  )
}

export default TopMenu
