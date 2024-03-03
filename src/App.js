
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavbarComp from './components/navbar/Navbar';
import Home from './pages/home';
import Cattegory from './components/category/Cattegory';
import CategoryContextProvider from './context/CategoryContext';
import menBanner from '../src/components/assets/banner_mens.png'
import womenBanner from '../src/components/assets/banner_women.png'
import kidsBanner from '../src/components/assets/banner_kids.png'
import Signup from './pages/Signup';
import ValidationContextProvider from './context/validation';
import Login from './pages/Login';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Logout from './pages/Logout';
 
 

function App() {
  return (
     <>
     <CategoryContextProvider>
      <ValidationContextProvider>
        
          <NavbarComp />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='Men' element={<Cattegory banner={menBanner} category="men" />} />
            <Route path='women' element={<Cattegory banner={womenBanner} category='women' />} />
            <Route path='kids' element={<Cattegory banner={kidsBanner} category='kid' />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='product' element={<Product />}>
             <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='cart' element={<Cart />} />
          </Routes>
          <Footer />
        
      </ValidationContextProvider>
     </CategoryContextProvider>
     </>
  );
}

export default App;
