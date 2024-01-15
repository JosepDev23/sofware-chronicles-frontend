'use client'
import React, { useContext, useEffect, useState } from 'react'

import style from './page.module.css'
import EntryCard from '@/components/entry-card/entry-card'
import Entry from '@/models/entry'
import EntryService from '@/services/entry/entry-service'

export default function Home() {
  const [lastestEntries, setLastestEntries] = useState<Entry[]>([])

  useEffect(() => {
    handleSetLastestEntries()
  }, [])

  async function handleSetLastestEntries() {
    const retrievedEntries = await EntryService.getLastestEntries()

    setLastestEntries(retrievedEntries)
  }

  return (
    <div className={style.home_wrapper}>
      {lastestEntries.map((entry) => (
        <div className={style.card_box}>
          <EntryCard entry={entry} />
        </div>
      ))}
    </div>
  )
}
