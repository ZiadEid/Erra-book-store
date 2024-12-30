import { useContext } from "react"
import { CartContext } from "../../Context/Cart"
import { IoCloseOutline } from "react-icons/io5";
import OrderForm from "../OrderForm";

const OrderPopup = () => {
  const { handelOrderPopup } = useContext(CartContext);
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 z-[9999] backdrop-blur-sm flex justify-center items-center shadow-sm">
        <div
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
          data-aos-delay="500"
          className="bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[500px]"
        >
          <div className="header flex justify-between items-center">
            <h1>Order your book</h1>
            <div>
              <IoCloseOutline
                onClick={() => handelOrderPopup()}
                className="text-2xl cursor-pointer hover:text-[red] duration-200"
              />
            </div>
          </div>
          <OrderForm />
        </div>
      </div>
    </>
  )
}

export default OrderPopup