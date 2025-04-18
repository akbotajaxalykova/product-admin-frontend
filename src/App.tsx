import { Container, CssBaseline } from "@mui/material";
import './App.css'
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import { Route, Routes } from "react-router-dom";
import Products from "./containers/Products/Products";
import NewProduct from "./containers/NewProduct/NewProduct";
import ProductDetails from "./containers/ProductDetails/ProductDetails";



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
          
        </Routes>
      </Container>
    </>
  );
}
export default App;