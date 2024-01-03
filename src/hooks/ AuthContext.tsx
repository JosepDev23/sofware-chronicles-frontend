'use client'
import LoggedUser from '@/models/logged-user'
import User from '@/models/user'
import React, { createContext, useState } from 'react'

interface AuthContextData {
  loggedUser: LoggedUser | undefined
  setLoggedUser: React.Dispatch<React.SetStateAction<LoggedUser | undefined>>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default function AuthContextProvider({ children }: any) {
  const [loggedUser, setLoggedUser] = useState<LoggedUser>()

  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  )
}
