export interface UserState {
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  user: {
    uid: string;
    first: string;
    last: string;
    email: string;
    status: number;
  };
}
