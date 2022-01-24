import { User } from "./user";

export type Post = {
  id: number
  title: string
  content: string
  author: User
  createdAt: Date
  updatedAt: Date
}