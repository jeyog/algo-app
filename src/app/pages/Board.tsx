import { Container, Fab, Grid, Toolbar } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'

function Board() {
  return (
    <Container maxWidth={false}>
      <Toolbar />
      <Grid container alignContent="center" height="100%">
        여기는 게시판입니다.
      </Grid>
      <Fab color="secondary" aria-label="add"  sx={{ position: 'fixed', display: '', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab>
    </Container>
  )
}

export default Board