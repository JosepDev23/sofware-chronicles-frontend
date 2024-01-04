import ENV from '@/constants/environment'
import LoggedUser from '@/models/logged-user'
import LoginDto from '@/models/login.dto'
import axios, { AxiosResponse } from 'axios'

export default async function login(loginDto: LoginDto): Promise<LoggedUser> {
  const url = ENV.user.login

  const response: AxiosResponse<LoggedUser> = await axios.post(url, loginDto)
  return response.data
}
