'use client'

import { auth } from '@/firebase/client'
import { User, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

// loading中はundefinedを返す
type UserContextType = User | null | undefined

const AuthContext = createContext<UserContextType>(undefined)

export const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>()
  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscirbe
  }, [])
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
