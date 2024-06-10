import React from 'react'
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box
} from '@mui/material'

const ReadingList = ({ books, onRemove }) => (
  <Box sx={{ mt: 3 }}>
    <List>
      {books.map(book => (
        <ListItem
          key={book.title}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <ListItemAvatar>
            <Avatar
              src={book.coverPhotoURL}
              alt={book.title}
              variant='rounded'
              sx={{ width: 56, height: 56 }}
            />
          </ListItemAvatar>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button
            variant='contained'
            color='secondary'
            onClick={() => onRemove(book)}
          >
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  </Box>
)

export default ReadingList
