import axios from "axios"
import { useContext, useEffect } from "react"
import { ProjectContext } from "../../Context/Project"
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";

const OrderNowBtn = ({ style, bookId }) => {
  const { baseUrl, token, tokenType, isLoading, setIsLoading } = useContext(ProjectContext);

  const handleAddToCart = async () => {
    let value = { bookId: bookId };
    setIsLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/cart`, value, {
        headers: {
          Authorization: `${tokenType} ${token}`
        }
      });
      toast.success('Added to cart!', { autoClose: 1000 });
      setIsLoading(false);
    }
    catch (error) {
      toast.error(error.response.data.message, { autoClose: 3000 });
      setIsLoading(false);
    }
  }
  return (
    <div>
      <ToastContainer />
      <button
        onClick={() => handleAddToCart()}
        className={`${style}`}
      >
        Order Now
        {
          isLoading &&
          <Loader
            bg="bg-[#ffffff44]"
            w="w-[25px]"
            h="h-[25px]"
          />
        }
      </button>
    </div>
  )
}

export default OrderNowBtn