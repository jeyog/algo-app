import { Link as RouterLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'inherit',
  color: 'inherit'
}));

export default Link