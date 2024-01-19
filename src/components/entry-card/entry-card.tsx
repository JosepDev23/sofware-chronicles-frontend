import React from 'react'
import style from './entry-card.module.css'
import Entry from '@/models/entry'

interface EntryCardProps {
  entry: Entry
}

const EntryCard: React.FC<EntryCardProps> = (props) => {
  return (
    <article className={style.entry_card_wrapper}>
      <div className={style.header_wrapper}>
        <label>{`${props.entry.date.toLocaleString()}`}</label>
      </div>
      <div className={style.body_wrapper}>
        <label>{props.entry.body}</label>
      </div>
    </article>
  )
}

export default EntryCard
