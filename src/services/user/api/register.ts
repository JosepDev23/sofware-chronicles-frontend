import RegisterDto from '@/models/register.dto'
import User from '@/models/user'
import axios, { AxiosResponse } from 'axios'

export default async function register(
  registerDto: RegisterDto
): Promise<User> {
  const url =
    process.env.BASE_URL! + process.env.USER_BASE! + process.env.USER_REGISTER!

  const response: AxiosResponse<User> = await axios.post(url, registerDto)
  return response.data
}
