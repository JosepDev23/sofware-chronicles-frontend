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
        <label>{`${props.entry.date.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hourCycle: 'h23',
        })}`}</label>
      </div>
      <div className={style.body_wrapper}>
        <label className={style.text_body}>{props.entry.body}</label>
      </div>
    </article>
  )
}

export default EntryCard
