import ENV from '@/constants/environment'
import Entry from '@/models/entry'
import axios, { AxiosResponse } from 'axios'

export default async function getLastestEntries(): Promise<Entry[]> {
  const url = ENV.entry.getLastest

  const response: AxiosResponse<Entry[]> = await axios.get(url)

  return response.data.map((entry) => {
    return { ...entry, date: new Date(entry.date.toString()) }
  })
}
