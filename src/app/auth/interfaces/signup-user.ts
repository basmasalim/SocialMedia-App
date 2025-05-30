export interface SignupUser {
  name: string
  email: string
  password: string
  rePassword: string
  dateOfBirth: string
  gender: string
}

export interface SignUpResponse {
  message: string;
}
