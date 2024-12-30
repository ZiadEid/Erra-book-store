import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart";

const CartBtn = () => {
  const { isCartItems } = useContext(CartContext);


  return (
    <>
      <Link
        data-aos="fade"
        data-aos-duration="700"
        data-aos-delay="700"
        data-aos-once="true"
        to={'/cart'}
        className={`relative bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:from-secondary hover:to-primary duration-200`}
      >
        Orders
        <FaCartPlus
          className='text-xl text-white drop-shadow-sm'
        />
        {
          isCartItems &&
          <div className="absolute w-[7px] h-[7px] rounded-full top-1 right-3 bg-[red] ">
          </div>
        }
      </Link>

    </>
  )
}

export default CartBtn