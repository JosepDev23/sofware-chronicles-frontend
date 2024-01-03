import User from './user'

export default interface LoggedUser {
  user: User
  token: string
}
