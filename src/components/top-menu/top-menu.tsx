'use client'
import Link from 'next/link'
import React from 'react'
import style from './top-menu.module.css'
import CustomButton from '../custom-button/custom-button'

const TopMenu: React.FC = () => {
  return (
    <header className={style.header_wrapper}>
      <Link href="/">
        <h1 className={style.app_title}>Software Chronicles</h1>
      </Link>
      <div className={style.buttons_wrapper}>
        <CustomButton label="Sign In" onClick={() => {}} />
        <CustomButton label="Log In" onClick={() => {}} />
      </div>
    </header>
  )
}

export default TopMenu
