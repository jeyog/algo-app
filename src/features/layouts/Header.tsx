import { AppBar, Toolbar, IconButton, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'

import Link from 'components/Link'

import { toggleDrawer } from './layoutsSlice'
import { useAppDispatch } from 'hooks/store'

function Header() {
  const appDispatch = useAppDispatch()

  return (
    <AppBar color="inherit" elevation={1} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Link to="/">
          <Button startIcon={<HomeIcon />}>
            알고리즘
          </Button>
        </Link>
        <IconButton color="primary" onClick={() => appDispatch(toggleDrawer())}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header