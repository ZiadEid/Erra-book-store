import { useContext, useState } from "react";
import { ProjectContext } from "../../Context/Project";
import axios from "axios";
import { MdFavorite } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader";

const RemoveFromWishlist = ({ wishlistId }) => {
  const { baseUrl, isLoading, setIsLoading, token, tokenType } = useContext(ProjectContext);

  const handleRemoveFromWishList = async (event) => {
    event.stopPropagation();
    setIsLoading(true);
    try {
      let value = { wishlistId: wishlistId };
      const res = await axios.post(`${baseUrl}/wishlist/remove`, value, {
        headers: {
          Authorization: `${tokenType} ${token}`
        }
      });
      toast.success('removed from wishlist!', { autoClose: 1000 });
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 1000 });
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      {
        isLoading &&
        <Loader
          bg="bg-[#ffffff44]"
          w="w-[25px]"
          h="h-[25px]"
        />
      }
      <div
        onClick={handleRemoveFromWishList}
        className="absolute top-4 right-5 cursor-pointer w-[30px] h-[30px] flex justify-center items-center"
      >
        <MdFavorite className="text-[20px]" />
      </div>
    </div>
  )
}

export default RemoveFromWishlist