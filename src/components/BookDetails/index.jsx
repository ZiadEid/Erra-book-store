import { useParams } from "react-router-dom"
import useFetchSingleBook from "../../Hooks/useFetchSingleBook"
import OrderNowBtn from "../OrderNowBtn"

const BookDetails = () => {
  const { bookId } = useParams()
  const { book } = useFetchSingleBook(bookId)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
      <div className="rounded-[6px] overflow-hidden shadow-lg">
        <img
          className={`block h-[80vh] w-[100%] object-contain`}
          src={book.image}
          alt={book.title}
        />
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-10 text-center rounded space-y-10 shadow-xl">
        <h1 className="text-xl sm:text-4xl font-bold">{book.title}</h1>
        <p className="text-gray-500 duration-300 text-sm sm:text-lg lg:text-sm text-justify">
          {book.description}
        </p>
        <div className="flex justify-center gap-40">
          <p className="text-black dark:text-white text-sm sm:text-lg lg:text-sm duration-300">
            {book.category}
          </p>
          <p className="text-primary text-sm sm:text-lg font-bold duration-300">
            {book.price}
          </p>
        </div>
        <OrderNowBtn
          bookId={bookId}
          style="w-full bg-primary text-white px-4 py-2 rounded-full mt-4 duration-300"
        />
      </div>
    </div>
  )
}

export default BookDetails