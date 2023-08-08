import logo from '../Resources/online_store_logo.jpg'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-center items center bg-blue-500 w-full'>
      <div className='flex flex-row justify-between w-3/4 p-2'>
        <NavLink to='/'>
          <img className='h-[30px] w-[30px] rounded-full' src={logo} alt="Shop Logo" />        
        </NavLink>
        
          <div className='flex items-center justify-center'>
            <NavLink to='/'>
              <p className='pr-2'>Home</p>              
            </NavLink> 
            <NavLink to='/cart'>
              <FaShoppingCart className='mt-1'/>
            </NavLink>
          </div>
      </div>
    </div>
  )
};

export default Navbar;
