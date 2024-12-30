import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { ProjectContext } from '../../Context/Project';

const MenuLinks = () => {
  const { token } = useContext(ProjectContext);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <ul className='lg:flex items-center gap-4 hidden'>
        <li>
          <Link
            to={"/"}
            className={`p-4 hover:text-primary duration-200 ${activePath === '/' && 'text-primary'}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/all-books"}
            className={`p-4 hover:text-primary duration-200 ${activePath === '/all-books' && 'text-primary'}`}
          >
            All Books
          </Link>
        </li>
        {
          token &&
          <li>
            <Link
              to={"/wishlist"}
              className={`p-4 hover:text-primary duration-200 ${activePath === '/wishlist' && 'text-primary'}`}
            >
              Wishlist
            </Link>
          </li>
        }
      </ul>
    </>
  )
}

export default MenuLinks