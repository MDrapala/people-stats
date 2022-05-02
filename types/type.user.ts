export interface UserState {
  isLoggingIn: boolean
  user: {
    uid: string
    first: string
    last: string
    email: string
    photoURL: string
  }
}
