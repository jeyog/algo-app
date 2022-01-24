import { Avatar } from "@mui/material"
import { User } from "types/user"

function stringToColor(string: string) {
  let hash = 0

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substring(-2)
  }

  return color
}

function stringAvatar(name: string) {
  return ({
    sx: {
      bgcolor: stringToColor(name)
    },
    children: name.substring(1, name.length)
  })
}

type UserAvatarProps = {
  user: User
}

function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Avatar {...stringAvatar(user.name)} />
  )
}

export default UserAvatar