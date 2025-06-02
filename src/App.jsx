
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Orders from './Orders.jsx';

function App() {

  return (
    <div>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App
