import { useState } from 'react';

const useReadingList = () => {
  const [readingList, setReadingList] = useState([]);

  const addBook = (book) => {
    if (!readingList.some((b) => b.title === book.title)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeBook = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  return {
    readingList,
    addBook,
    removeBook,
  };
};

export default useReadingList;
