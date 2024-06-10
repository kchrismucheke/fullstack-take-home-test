import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material'

const BookGrid = ({ books, onAdd }) => (
  <Grid container spacing={3}>
    {books.map(book => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={book.title}>
        <Card>
          <CardMedia
            component='img'
            height='140'
            image={book.coverPhotoURL}
            alt={book.title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {book.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {book.author}
            </Typography>
          </CardContent>
          <Button
            variant='contained'
            color='primary'
            onClick={() => onAdd(book)}
          >
            Add to Reading List
          </Button>
        </Card>
      </Grid>
    ))}
  </Grid>
)

export default BookGrid
