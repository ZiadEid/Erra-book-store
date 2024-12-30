import { Link } from "react-router-dom";
import OrderNowBtn from "../OrderNowBtn";
import AddToWishlist from "../AddToWishlist";
import RemoveFromWishlist from './../RemoveFromWishlist/index';

const WishlistCard = ({ wishlistId, bookImg, bookTitle, bookDescription, bookPrice }) => {


  return (
    <div className="group relative max-w-[300px] bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white duration-high shadow-xl rounded-2xl text-center py-4">
      <Link
        to={`/wishlist/${wishlistId}`}
        className="block"
      >
        <div className="h-[100px]">
          <img
            className="max-w-[100px] block mx-auto -translate-y-10 group-hover:scale-105 duration-300 shadow-md"
            src={bookImg}
            alt={bookTitle}
          />
        </div>
        <div className="px-4 text-center space-y-2">
          <h1 className="text-xl font-bold">{bookTitle}</h1>
          <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
            {bookDescription}
          </p>
          <p className="text-black dark:text-white duration-300">
            {bookPrice}
          </p>
        </div>
      </Link>
      <OrderNowBtn
        bookId={wishlistId}
        style="bg-primary text-white px-4 py-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary duration-300"
      />
      <RemoveFromWishlist wishlistId={wishlistId} />
    </div>
  );
};

export default WishlistCard;
