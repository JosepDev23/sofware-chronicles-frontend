import ENV from '@/constants/environment'
import LoggedUser from '@/models/logged-user'
import RegisterDto from '@/models/register.dto'
import axios, { AxiosResponse } from 'axios'

export default async function register(
  registerDto: RegisterDto
): Promise<LoggedUser> {
  const url = ENV.user.register

  const response: AxiosResponse<LoggedUser> = await axios.post(url, registerDto)
  return response.data
}
