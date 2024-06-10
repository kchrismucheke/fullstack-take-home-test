import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Alert, Box } from '@mui/material';
import { ApolloClient, InMemoryCache, gql, ApolloProvider, useQuery } from '@apollo/client';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import useReadingList from './hooks/useReadingList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const GET_BOOKS = gql`
  query Books {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, { client });
  const [books, setBooks] = useState([]);
  const { readingList, addBook, removeBook } = useReadingList();

  useEffect(() => {
    if (data) setBooks(data.books);
  }, [data]);

  const handleSearch = (query) => {
    setBooks(data.books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <ApolloProvider client={client}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Book Assignment View
        </Typography>
        <SearchBar onSearch={handleSearch} />
        {loading && <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />}
        {error && <Alert severity="error">Failed to load books: {error.message}</Alert>}
        {!loading && !error && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <BookList books={books} onAdd={addBook} />
            <ReadingList books={readingList} onRemove={removeBook} />
          </Box>
        )}
      </Container>
    </ApolloProvider>
  );
};

export default App;
