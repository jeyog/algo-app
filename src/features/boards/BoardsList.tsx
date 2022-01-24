import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { useGetBoardsQuery } from 'app/services/algo'

import Link from 'components/Link'
import { Board } from 'types/board'
import { useAppSelector } from 'hooks/store'
import { selectBoards } from './boardsSlice'

function BoardsList() {
  const { boards } = useAppSelector(selectBoards)
  useGetBoardsQuery()

  return (
    <Box sx={{ display: 'flex' }}>
      <List style={{ color: "inherit" }} >
        {boards.map((board: Board, index: number) => (
          <Link key={index} to={'/board/' + board.name}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={board.value} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  )
}

export default BoardsList