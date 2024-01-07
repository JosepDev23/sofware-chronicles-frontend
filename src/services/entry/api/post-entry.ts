import ENV from '@/constants/environment'
import Entry from '@/models/entry'
import EntryDto from '@/models/entry.dto'
import axios, { AxiosResponse } from 'axios'

export default async function postEntry(
  entryDto: EntryDto,
  token: string
): Promise<Entry> {
  const url = ENV.entry.post

  const response: AxiosResponse<Entry> = await axios.post(url, entryDto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
