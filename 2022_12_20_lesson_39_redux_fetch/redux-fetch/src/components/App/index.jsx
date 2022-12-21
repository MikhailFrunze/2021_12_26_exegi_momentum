import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage'
import CartPage from '../../pages/CartPage'
import Layout from '../Layout';

function App() {
  return (
    <div className="App">

      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>

    </div> 
  );
}

export default App;
