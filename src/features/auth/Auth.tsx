import { useEffect, useState } from 'react'
import { Box, Button, FormControl, FormHelperText, FormLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { AuthRequest, useAuthenticateMutation } from 'app/services/algo'

import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'hooks/store'
import { selectAuth } from './authSlice'

type AuthState = {
  username: string
  password: string
  show: boolean
}

function Auth() {
  const auth = useAppSelector(selectAuth)
  const [authenticate] = useAuthenticateMutation()
  const [formState, setFormState] = useState<AuthState>({
    username: '',
    password: '',
    show: false
  })
  const navigate = useNavigate()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    let request: AuthRequest = {
      username: formState.username,
      password: formState.password
    }
    await authenticate(request).unwrap()
  }

  function handleChange({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleClickShow(event: React.MouseEvent<HTMLButtonElement>) {
    setFormState((prev) => ({ ...prev, show: !formState.show }))
  }

  useEffect(() => {
    if (auth.success) {
      navigate('/')
    }
  }, [auth, navigate])

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <TextField fullWidth variant="outlined" id="username" name="username" label="학번" margin="normal" value={formState.username} onChange={handleChange} />
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="outlined-adornment-password">비밀번호</InputLabel>
        <OutlinedInput fullWidth id="password" name="password" label="비밀번호" margin="dense" type={formState.show ? 'text' : 'password'} value={formState.password} onChange={handleChange}
          endAdornment={formState.password ? 
            <InputAdornment position="end">
              <IconButton aria-label="toggle-password-visibility" onClick={handleClickShow}>
                {formState.show ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment> : null
          } />
        <FormHelperText error>

        </FormHelperText>
      </FormControl>
      <FormControl fullWidth margin="dense" error>
        {!auth.success ? (
          <FormLabel error>
            {auth.message}
          </FormLabel>
        ) : null}
      </FormControl>
      <Button fullWidth variant="contained" sx={{ marginY: 1 }} type="submit">로그인</Button>
    </Box>
  )
}

export default Auth
