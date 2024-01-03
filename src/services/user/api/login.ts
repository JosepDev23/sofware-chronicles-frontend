import LoginDto from '@/models/login.dto'
import User from '@/models/user'
import axios, { AxiosResponse } from 'axios'

export default async function login(loginDto: LoginDto): Promise<User> {
  const url =
    process.env.BASE_URL! + process.env.USER_BASE! + process.env.USER_LOGIN!

  const response: AxiosResponse<User> = await axios.post(url, loginDto)
  return response.data
}
