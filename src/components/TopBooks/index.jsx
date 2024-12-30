import { Link } from "react-router-dom";
import useFetchBooks from "../../Hooks/useFetchBooks";
import NormalCard from "../NormalCard"

const TopBooks = () => {
  const { TopBooks } = useFetchBooks();

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Best Books
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
        </div>
        <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {
            TopBooks.map(book => (
              <NormalCard
                key={book.id}
                bookId={book.id}
                bookImg={book.image}
                bookTitle={book.title}
                bookCategory={book.category}
                bookPrice={book.price}
              />
            ))
          }
        </div>
        <div className="flex justify-center">
          <Link
            to={"/all-books"}
            className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full"
          >
            View All Books
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBooks