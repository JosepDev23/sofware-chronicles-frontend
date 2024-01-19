'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import style from './top-menu.module.css'
import CustomButton from '../custom-button/custom-button'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/hooks/AuthContext'
import NavItem from './models/nav-item'

const TopMenu: React.FC = () => {
  const APPLICATION_TITLE = 'Software Chronicles'
  const NAV_ITEMS: NavItem[] = [
    { label: 'Your chronicle', path: 'your-chronicle' },
  ]

  const navigator = useRouter()
  const { loggedUser, setLoggedUser } = useContext(AuthContext)

  function handleClickSignIn() {
    navigator.replace('/sign-in')
  }

  function handleClickLogIn() {
    navigator.replace('/log-in')
  }

  function handleNewEntry() {
    navigator.replace('/new-entry')
  }

  function handleLogOut() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setLoggedUser(undefined)
    navigator.replace('/')
  }

  return (
    <header className={style.header_wrapper}>
      <nav className={style.nav_wrapper}>
        <Link className={style.link} href="/">
          <h1 className={style.app_title}>{APPLICATION_TITLE}</h1>
        </Link>
        {NAV_ITEMS.map((navItem) => (
          <Link className={style.link} href={navItem.path} key={navItem.label}>
            <h2 className={style.nav_item}>{navItem.label}</h2>
          </Link>
        ))}
      </nav>
      {loggedUser ? (
        <div className={style.logged_buttons_wrapper}>
          <div className={style.new_entry_button_box}>
            <CustomButton label="New Entry" onClick={handleNewEntry} />
          </div>
          <h2 className={style.app_title}>
            Welcome back {loggedUser.user.username}
          </h2>
          <div className={style.new_entry_button_box}>
            <CustomButton label="Log Out" onClick={handleLogOut} />
          </div>
        </div>
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
