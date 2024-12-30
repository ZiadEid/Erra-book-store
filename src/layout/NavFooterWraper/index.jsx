import { useContext } from 'react';
import Loader from './../../components/Loader';
import { ProjectContext } from '../../Context/Project';
import { CartContext } from '../../Context/Cart';
import OrderPopup from '../../components/OrderPopup';
import NavBar from '../NavBar';
import Footer from '../Footer';

const NavFooterWraper = ({ children }) => {
  const { isLoading } = useContext(ProjectContext);
  const { orderPopup } = useContext(CartContext);

  return (
    <div className='relative'>
      {
        isLoading &&
        <Loader
          bg="bg-white z-[999999999]"
          w="w-[60px]"
          h="h-[60px]"
        />
      }
      {
        orderPopup &&
        <OrderPopup />
      }
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default NavFooterWraper