import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { ProjectContext } from "../../Context/Project";
import useFetchCart from "../../Hooks/useFetchCart";

const RespMenuLinks = ({ isResLinks, setIsResLinks }) => {
  const { token, setToken } = useContext(ProjectContext);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const { setCartItems } = useFetchCart();


  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <ul
      className={`${isResLinks ? "block" : "hidden"} absolute top-full right-0 w-2/4 bg-gray-300 opacity-[0.9] dark:bg-gray-800 z-[999] p-3 shadow-sm rounded text-center shadow-lg`}
    >
      <IoClose
        onClick={() => setIsResLinks(!isResLinks)}
        className='text-[red]'
      />
      <li
        className='border-b border-b-[#00000033] dark:border-b-[#ffffff33] last:border-b-0'
      >
        <Link
          to={"/"}
          className={`py-3 inline-block w-full ${activePath === '/' && 'bg-secondary'}`}
        >
          Home
        </Link>
      </li>
      <li
        className='border-b border-b-[#00000033] dark:border-b-[#ffffff33] last:border-b-0'
      >
        <Link
          to={"/all-books"}
          className={`py-3 inline-block w-full ${activePath === '/all-books' && 'bg-secondary'}`}
        >
          All Books
        </Link>
      </li>
      {
        token ?
          <>
            <li>
              <Link
                to={"/wishlist"}
                className={`py-3 inline-block w-full ${activePath === '/wishlist' && 'bg-secondary'}`}
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("wishlist");
                  localStorage.removeItem("cartItems");
                  setToken("");
                  setCartItems([]);
                }}
                className='py-3 bg-primary block w-full mt-2 rounded-full'
              >
                Logout
              </Link>
            </li>
          </>
          :
          <li>
            <Link
              to={"/login"}
              className='py-3 bg-primary block w-full mt-2 rounded-full'
            >
              Login
            </Link>
          </li>
      }
    </ul>
  )
}

export default RespMenuLinks