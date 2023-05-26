import Header from './layouts/Header';
import './App.css';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

const products = [
  {
    name: '버터바 1종',
    price: '3,500원',
    image: 'product-01-main.jpeg',
  },
  {
    name: '버터바 2종',
    price: '3,500원',
    image: 'product-01-main.jpeg',
  },
  {
    name: '버터바 3종',
    price: '3,500원',
    image: 'product-01-main.jpeg',
  },
  {
    name: '버터바 4종',
    price: '3,500원',
    image: 'product-01-main.jpeg',
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <ProductListPage products={products} />
            </>
          }
        />
        <Route
          path='/product/:id'
          element={<ProductDetailPage products={products} />}
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
