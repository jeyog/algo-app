import { Container, Grid, Toolbar } from '@mui/material'

import AddPost from 'features/posts/AddPost'

function Home() {
  return (
    <Container maxWidth={false}>
      <Toolbar />
      <Grid container alignContent="center" height="100%">
        여기는 홈화면입니다.
      </Grid>
      <AddPost />
    </Container>
  )
}

export default Home