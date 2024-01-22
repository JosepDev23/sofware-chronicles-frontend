'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import style from './page.module.css'
import EntryCard from '@/components/entry-card/entry-card'
import Entry from '@/models/entry'
import EntryService from '@/services/entry/entry-service'

export default function Home() {
  const [lastestEntries, setLastestEntries] = useState<Entry[]>([])
  const [entriesColumnOne, setEntriesColumnOne] = useState<Entry[]>([])
  const [entriesColumnTwo, setEntriesColumnTwo] = useState<Entry[]>([])
  const [entriesColumnThree, setEntriesColumnThree] = useState<Entry[]>([])

  const refOne = useRef<HTMLDivElement>(null)
  const refTwo = useRef<HTMLDivElement>(null)
  const refThree = useRef<HTMLDivElement>(null)

  //TODO: fix double useeffect
  let firstTime = true

  useEffect(() => {
    if (firstTime) {
      ;(async () => {
        const retrievedEntries = await EntryService.getLastestEntries()
        setLastestEntries(retrievedEntries)
      })()
      firstTime = false
    }
  }, [])

  useLayoutEffect(() => {
    if (lastestEntries.length !== 0) {
      const colNumber: number = getNextColNumber()
      switch (colNumber) {
        case 1:
          setEntriesColumnOne((prev) => prev.concat(lastestEntries[0]))
          break
        case 2:
          setEntriesColumnTwo((prev) => prev.concat(lastestEntries[0]))
          break
        case 3:
          setEntriesColumnThree((prev) => prev.concat(lastestEntries[0]))
          break
      }
      setLastestEntries((prev) =>
        prev.filter((entry) => entry._id !== lastestEntries[0]._id)
      )
    }
  }, [lastestEntries])

  function getNextColNumber(): number {
    let colNumber = 1
    if (
      refOne.current?.getBoundingClientRect().y! <=
      refTwo.current?.getBoundingClientRect().y!
    ) {
      colNumber = 1
      if (
        refOne.current?.getBoundingClientRect().y! <=
        refThree.current?.getBoundingClientRect().y!
      ) {
        colNumber = 1
      } else {
        colNumber = 3
      }
    } else {
      colNumber = 2
      if (
        refTwo.current?.getBoundingClientRect().y! <=
        refThree.current?.getBoundingClientRect().y!
      ) {
        colNumber = 2
      } else {
        colNumber = 3
      }
    }
    return colNumber
  }

  return (
    <div className={style.home_wrapper}>
      <div className={style.column_wrapper}>
        {entriesColumnOne.map((entry) => (
          <div className={style.card_box}>
            <EntryCard entry={entry} />
          </div>
        ))}
        <div ref={refOne}></div>
      </div>
      <div className={style.column_wrapper}>
        {entriesColumnTwo.map((entry) => (
          <div className={style.card_box}>
            <EntryCard entry={entry} />
          </div>
        ))}
        <div ref={refTwo}></div>
      </div>
      <div className={style.column_wrapper}>
        {entriesColumnThree.map((entry) => (
          <div className={style.card_box}>
            <EntryCard entry={entry} />
          </div>
        ))}
        <div ref={refThree}></div>
      </div>
    </div>
  )
}
