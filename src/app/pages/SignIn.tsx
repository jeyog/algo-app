import { Card, CardContent, Container, Grid } from '@mui/material'
import Auth from 'features/auth/Auth'

function SignIn() {
  return (
    <Container maxWidth={false} style={{ height: '100vh' }}>
      <Grid container justifyContent="center" alignContent="center" height="100%">
        <Card>
          <CardContent>
            <Auth />
          </CardContent>
        </Card>
      </Grid>
    </Container>
  )
}

export default SignIn