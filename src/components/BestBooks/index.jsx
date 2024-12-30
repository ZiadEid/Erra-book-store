import useFetchBooks from "../../Hooks/useFetchBooks";
import SpecialCard from "../SpecialCard";

const BestBooks = () => {
  const {bestBooks} = useFetchBooks();

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[70px] md:grid-cols-3 md:gap-5 place-items-center">
          {
            bestBooks.map(book => (
              <SpecialCard
                key={book.id}
                bookId={book.id}
                bookImg={book.image}
                bookTitle={book.title}
                bookDescription={book.description}
                bookPrice={book.price}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BestBooks