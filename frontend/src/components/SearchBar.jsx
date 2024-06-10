import React, { useState, useEffect } from 'react'
import {
  TextField,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import { debounce } from 'lodash'

const SearchBar = ({ onSearch, searchResults }) => {
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const debouncedSearch = debounce(onSearch, 300)
    if (query) {
      debouncedSearch(query)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
    return () => {
      debouncedSearch.cancel()
    }
  }, [query, onSearch])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
        position: 'relative'
      }}
    >
      <TextField
        value={query}
        onChange={e => setQuery(e.target.value)}
        label='Search Books'
        variant='outlined'
        fullWidth
        sx={{ maxWidth: 600 }}
      />
      {showDropdown && searchResults.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            top: 56,
            width: '100%',
            maxWidth: 600,
            zIndex: 1
          }}
        >
          <List>
            {searchResults.map(book => (
              <ListItem button key={book.id}>
                <ListItemAvatar>
                  <Avatar src={book.coverPhotoURL} />
                </ListItemAvatar>
                <ListItemText primary={book.title} secondary={book.author} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  )
}

export default SearchBar
