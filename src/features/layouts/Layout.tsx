import { Box } from '@mui/material'
import Header from './Header'
import Aside from './Aside'
import Section from './Section'

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Aside />
      <Section />
    </Box>
  )
}

export default Layout