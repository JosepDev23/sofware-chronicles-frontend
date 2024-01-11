import ENV from '@/constants/environment'
import Entry from '@/models/entry'
import axios, { AxiosResponse } from 'axios'

export default async function getByUserId(
  userId: string,
  token: string
): Promise<Entry[]> {
  const url = `${ENV.entry.getByUserId}${userId}`

  const response: AxiosResponse<Entry[]> = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
