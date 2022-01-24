import { Routes, Route } from 'react-router-dom'

import Layout from 'features/layouts/Layout'
import Home from './pages/Home'
import Board from './pages/Board'
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'

import { useAppSelector } from 'hooks/store'
import { selectAuth, selectMyAuthority } from 'features/auth/authSlice'


function App() {
  const auth = useAppSelector(selectAuth)
  const myAuthority = useAppSelector(selectMyAuthority)

  return (
    <Routes>
      {!auth.token || myAuthority === 'ROLE_APPLICANT' ? (
        <Route path="/" element={<Landing />}>

        </Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="board">
            <Route path=":boardName" element={<Board />} />
          </Route>
        </Route>
      )}
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App