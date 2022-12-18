import { Routes, Route } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage'
import CategoriesPage from '../../pages/CategoriesPage'
import HomePage from '../../pages/HomePage'
import NotFoundPage from '../../pages/NotFoundPage'
import ProductsPage from '../../pages/ProductsPage';
import Layout from '../Layout';


function App() {


  return (
    <div className="App">

      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about_page' element={<AboutPage />} />
          <Route path='categories_page' element={<CategoriesPage />} />
          <Route path='categories_page/:category' element={<ProductsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
