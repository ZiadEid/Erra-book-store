import { CiMenuBurger } from "react-icons/ci";
import { useContext, useState } from "react";
import { ProjectContext } from '../../Context/Project';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Cart';
import useFetchCart from "../../Hooks/useFetchCart";
import MyLogo from './../../components/MyLogo';
import DarkMode from './../../components/DarkMode';
import MenuLinks from './../../components/MenuLinks';
import CartBtn from './../../components/CartBtn';
import RespMenuLinks from './../../components/RespMenuLinks';

const NavBar = () => {
  const [isResLinks, setIsResLinks] = useState(false);
  const { token } = useContext(ProjectContext);
  const { setIsCartItems } = useContext(CartContext);
  const { setCartItems } = useFetchCart();

  return (
    <div className='sticky top-0 z-[99] shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 relative'>
      <div className="container ">
        <div className="flex justify-between items-center h-[72px]">
          <div className='logo'>
            <MyLogo className='w-10' />
          </div>
          <div className="flex justify-between items-center gap-4">
            <DarkMode />
            <MenuLinks />
            <CartBtn />
            {
              token ?
                <Link
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("wishlist");
                    localStorage.removeItem("cartItems");
                    localStorage.removeItem("isCartItems");
                    setToken("");
                    setCartItems([]);
                    setIsCartItems(false)
                  }}
                  className='hidden sm:block'
                >
                  Logout
                </Link>
                :
                <Link to={'/login'} className='hidden sm:block'>login</Link>
            }
            <CiMenuBurger
              onClick={() => setIsResLinks(!isResLinks)}
              className="block lg:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
      <RespMenuLinks isResLinks={isResLinks} setIsResLinks={setIsResLinks} />
    </div>
  )
}

export default NavBar