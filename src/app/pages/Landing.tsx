import { Button, Container } from '@mui/material'
import UserAvatar from 'components/UserAvatar'
import { selectAuth } from 'features/auth/authSlice'
import { useAppSelector } from 'hooks/store'

function Landing() {
  const auth = useAppSelector(selectAuth)

  return (
    <Container maxWidth={false}>
      흥보 및 랜딩 페이지
      {auth.token ? (
        <UserAvatar user={auth.user} />
      ) : (
        <Button href="/signin">로그인</Button>
      )}
      
    </Container>
  )
}

export default Landing