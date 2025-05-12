import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Login from './containers/Login/Login';
import NewProduct from './containers/NewProduct/NewProduct';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import Products from './containers/Products/Products';
import Register from './containers/Register/Register';

function App() {
  return (
    <>
      <CssBaseline />
      <AppToolbar />
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products/new' element={<NewProduct />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
