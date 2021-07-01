export type TUserSession = {
  databaseId: string
  role: 'admin' | 'client'
  expires: string
  someInfo: string
  user: {
    email: string
    image: string
    name: string
  }
}
