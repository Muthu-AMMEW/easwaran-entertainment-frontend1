import './App.css';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Foot from './components/Foot';
import OrderDetail from './pages/OrderDetail';
import UserProfile from './pages/UserProfile';
import ChangePassword from './pages/profile/ChangePassword';
import ForgetPassword from './pages/profile/ForgetPassword';



function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ToastContainer theme='dark' position='top-center' />
          <NavBar cartItems={cartItems} />
          <Routes>
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/order" element={<OrderDetail />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/profile/changepassword" element={<ChangePassword />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
          </Routes>
          <Foot />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
