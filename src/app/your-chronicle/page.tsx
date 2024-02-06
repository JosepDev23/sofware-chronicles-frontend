'use client'
import React, { useContext, useEffect, useState } from 'react'

import style from './your-chronicle.module.css'
import Entry from '@/models/entry'
import EntryService from '@/services/entry/entry-service'
import EntryCard from '@/components/entry-card/entry-card'
import { AuthContext } from '@/hooks/AuthContext'
export default function YourChronicle() {
  const { loggedUser } = useContext(AuthContext)
  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    handleSetEntries()
  }, [loggedUser])

  async function handleSetEntries() {
    if (loggedUser) {
      const retrievedEntries = await EntryService.getByUserId(
        loggedUser.user._id,
        loggedUser.token
      )

      setEntries(retrievedEntries)
    }
  }
  return (
    <div className={style.background_wrapper}>
      {loggedUser ? (
        entries.length === 0 ? (
          <h1>Start writting enties!</h1>
        ) : (
          entries.map((entry) => (
            <div className={style.card_box}>
              <EntryCard entry={entry} />
            </div>
          ))
        )
      ) : (
        <h1>Log in to see your entries</h1>
      )}
    </div>
  )
}
