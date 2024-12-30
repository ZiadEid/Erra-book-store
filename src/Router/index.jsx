import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import AllBooks from './../pages/AllBooks';
import Login from './../pages/Auth/Login';
import Register from './../pages/Auth/Register';
import NavFooterWraper from './../layout/NavFooterWraper';
import WishList from '../pages/WishList';
import SingleBook from '../pages/SingleBook';
import Cart from '../pages/Cart';
import Error from '../pages/Error';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={
              <NavFooterWraper>
                <Home />
              </NavFooterWraper>
            }
          />
          <Route
            path='all-books'
            element={
              <NavFooterWraper>
                <AllBooks />
              </NavFooterWraper>
            }
          />
          <Route
            path='all-books/:bookId'
            element={
              <NavFooterWraper>
                <SingleBook />
              </NavFooterWraper>
            }
          />
          <Route
            path='wishlist'
            element={
              <NavFooterWraper>
                <WishList />
              </NavFooterWraper>
            }
          />
          <Route
            path='wishlist/:bookId'
            element={
              <NavFooterWraper>
                <SingleBook />
              </NavFooterWraper>
            }
          />
          <Route
            path='cart'
            element={
              <NavFooterWraper>
                <Cart />
              </NavFooterWraper>
            }
          />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Router