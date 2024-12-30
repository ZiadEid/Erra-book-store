import { useContext, useState } from "react";
import { ProjectContext } from "../../Context/Project";
import axios from "axios";
import { MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const AddToWishlist = ({ style, bookId }) => {
  const { baseUrl, isLoading, setIsLoading, token, tokenType } = useContext(ProjectContext);

  const handleAddToWishList = async (event) => {
    event.stopPropagation();
    try {
      let value = { bookId: bookId };
      const res = await axios.post(`${baseUrl}/wishlist/add`, value, {
        headers: {
          Authorization: `${tokenType} ${token}`
        }
      });
      toast.success('Added to wishlist!', { autoClose: 1000 });
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 1000 });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div
        onClick={handleAddToWishList}
        className={`absolute top-4 right-5 cursor-pointer w-[30px] h-[30px] flex justify-center items-center ${style}`}
      >
        <MdFavoriteBorder className={`text-[20px]`} />
      </div>
    </div>
  )
}

export default AddToWishlist