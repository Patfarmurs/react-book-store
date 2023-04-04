import React from 'react';
import { v4 as uuid4 } from 'uuid';
import ContentBook from './Book';
import BookForm from './Form';

const BookList = () => {
  const books = [
    {
      title: 'Art of War',
      author: 'Nicolo Machiavely',
      completed: true,
      id: uuid4(),
    },
    {
      title: 'The Prince',
      author: 'Nicolo Machiavely',
      completed: true,
      id: uuid4(),
    },
    {
      title: 'Pearl of great price',
      author: 'Joseph Smith',
      completed: true,
      id: uuid4(),
    },
  ];

  return (
    <div>
      <ul>
        {books.map((book) => (
          <ContentBook
            title={book.title}
            author={book.author}
            key={book.id}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookList;
