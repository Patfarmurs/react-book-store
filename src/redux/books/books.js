import { v4 } from 'uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Actions
const addBook = (book) => ({
  type: ADD,
  book,
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

// Reducer
const bookReducer = (state = [
  {
    id: v4(),
    title: 'The Pearl of a great price',
    author: 'Joseph Smith',
    genre: 'Gospel',
  },
  {
    id: v4(),
    title: 'The Prince',
    author: 'Nicolo Makiaveli',
    genre: 'philosophy',
  },
  {
    id: v4(),
    title: 'Price of my karma',
    author: 'Patrick Mukul',
    genre: 'philosophy',
  },
  {
    id: v4(),
    title: 'Metaphore',
    author: 'Pitagore',
    genre: 'historical',
  },
], action = {}) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};

export { addBook, removeBook };
export default bookReducer;
