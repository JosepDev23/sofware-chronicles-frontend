'use client'
import LoggedUser from '@/models/logged-user'
import React, { createContext, useEffect, useState } from 'react'

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
