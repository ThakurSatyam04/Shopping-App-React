import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return(
    <>
      <div>
        <Navbar/>
      </div>
      <div className="flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </>
  )
};

export default App;
