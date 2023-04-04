import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/CategoriesPg';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
