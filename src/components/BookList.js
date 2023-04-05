import React from 'react';
import { useSelector } from 'react-redux';
import ContentBook from './Book';
import BookForm from './Form';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <ContentBook
            book={book}
            key={book.id}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookList;
