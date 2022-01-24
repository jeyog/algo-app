export type User = {
  username: string
  name: string
  birth: Date
  gender: 'M' | 'F'
  grade: number
  status: string
  authority: 'ROLE_APPLICANT' | 'ROLE_USER' | 'ROLE_ADMIN'
}