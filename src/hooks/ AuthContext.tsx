'use client'
import User from '@/models/user'
import React, { createContext, useState } from 'react'

interface AuthContextData {
  user: User | undefined
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  token: string | undefined
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<User>()
  const [token, setToken] = useState<string>()

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
