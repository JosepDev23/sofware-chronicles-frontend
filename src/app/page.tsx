'use client'

import { AuthContext } from '@/hooks/AuthContext'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { setLoggedUser } = useContext(AuthContext)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if (token && user) {
      setLoggedUser({
        user: JSON.parse(user),
        token: token,
      })
    }
  }, [])

  return <></>
}
