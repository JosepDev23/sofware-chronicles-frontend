'use client'
import React, { useContext, useEffect, useState } from 'react'

import style from './page.module.css'
import EntryCard from '@/components/entry-card/entry-card'
import { AuthContext } from '@/hooks/AuthContext'
import Entry from '@/models/entry'
import EntryService from '@/services/entry/entry-service'

export default function Home() {
  const { loggedUser } = useContext(AuthContext)
  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    handleSetEntries()
  }, [])

  async function handleSetEntries() {
    console.log('jacinto component', loggedUser)
    if (loggedUser) {
      const retrievedEntries = await EntryService.getByUserId(
        loggedUser.user._id,
        loggedUser.token
      )

      setEntries(retrievedEntries)
    }
  }

  return (
    <div className={style.home_wrapper}>
      {loggedUser ? (
        entries.map((entry) => <EntryCard entry={entry} />)
      ) : (
        <h1>Log in to see your entries</h1>
      )}
      <EntryCard
        entry={{
          _id: '1',
          userId: '1',
          date: new Date(),
          body: 'cumlord was here',
        }}
      />
      <p>{loggedUser?.token}</p>
    </div>
  )
}
