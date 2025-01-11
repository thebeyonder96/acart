import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Collection from './pages/Collection.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Product from './pages/Product.tsx';
import Cart from './pages/Cart.tsx';
import Login from './pages/Login.tsx';
import PlaceOrder from './pages/PlaceOrder.tsx';
import Orders from './pages/Orders.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productID' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
