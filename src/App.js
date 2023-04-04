import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Navigation from './components/Navigation';
import CategoryPage from './pages/CategoryPage';

const App = () => (
  <div>
    <Navigation />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  </div>
);

export default App;
