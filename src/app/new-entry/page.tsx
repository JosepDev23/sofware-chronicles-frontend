'use client'
import React, { useContext, useState } from 'react'
import style from './new-entry.module.css'
import EntryTextCard from './components/entry-text-card/entry-text-card'
import CustomButton from '@/components/custom-button/custom-button'
import { AuthContext } from '@/hooks/AuthContext'
import EntryDto from '@/models/entry.dto'
import EntryService from '@/services/entry/entry-service'
import { useRouter } from 'next/navigation'

const NewEntry: React.FC = () => {
  const navigator = useRouter()
  const [entryText, setEntryText] = useState<string>('')
  const { loggedUser } = useContext(AuthContext)

  async function handleSendEntry() {
    const newEntry: EntryDto = {
      userId: loggedUser!.user._id,
      body: entryText,
      date: new Date(),
    }

    EntryService.postEntry(newEntry, loggedUser!.token).then(() => {
      navigator.replace('/your-chronicle')
    })
  }

  return (
    <div className={style.new_entry_wrapper}>
      <h2>Write your thinkings...</h2>
      <div className={style.card_box}>
        <EntryTextCard
          value={entryText}
          onChange={(e) => {
            setEntryText(e.target.value)
          }}
        />
      </div>

      <div className={style.button_box}>
        <CustomButton label="Send" onClick={handleSendEntry} />
      </div>
    </div>
  )
}

export default NewEntry
