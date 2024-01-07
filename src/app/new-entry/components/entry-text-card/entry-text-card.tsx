import React from 'react'
import style from './entry-text-card.module.css'

interface EntryTextCardProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const EntryTextCard: React.FC<EntryTextCardProps> = (props) => {
  return (
    <textarea
      className={style.input_wrapper}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default EntryTextCard
