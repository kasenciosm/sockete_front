import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import NavBar from "./components/NavBar"
import Register from './pages/Register';
import Payment from './pages/Payment';


function App() {
    return (
        <div className="max-w-screen-xl m-auto w-full">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </div>
    )
}

export default App