import React from 'react'
import style from './entry-card.module.css'
import Entry from '@/models/entry'

interface EntryCardProps {
  entry: Entry
}

const EntryCard: React.FC<EntryCardProps> = (props) => {
  return (
    <article className={style.entry_card_wrapper}>
      <label>{props.entry.date.toLocaleString()}</label>
      <div className={style.divider} />
      <label>{props.entry.body}</label>
    </article>
  )
}

export default EntryCard
