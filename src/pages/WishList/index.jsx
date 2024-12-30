import { useContext, useEffect } from "react";
import useFetchWishlist from "../../Hooks/useFetchWishlist";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../Context/Project";
import WishlistCard from "../../components/WishlistCard";

const WishList = () => {
  const { token, setIsLoading } = useContext(ProjectContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      setIsLoading(true);
      navigate('/');
    }
  }, [token])

  const { wishlist } = useFetchWishlist();

  return (
    <div className='min-h-[100vh] bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <div className="py-10">
        <div
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
          data-aos-delay="500"
          className="container"
        >
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Wishlist Books</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[65px] md:grid-cols-3 justify-center">
            {
              wishlist.map(book => (
                <WishlistCard
                  key={book.book.id}
                  bookId={book.book.id}
                  wishlistId={book.id}
                  bookImg={book.book.image}
                  bookTitle={book.book.title}
                  bookDescription={book.book.description}
                  bookPrice={book.book.price}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList