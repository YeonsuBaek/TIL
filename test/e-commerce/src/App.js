import Header from './layouts/Header';
import './App.css';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewProductPage from './pages/NewProductPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <ProductListPage />
            </>
          }
        />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new-product' element={<NewProductPage />} />
      </Routes>
    </>
  );
}

export default App;
