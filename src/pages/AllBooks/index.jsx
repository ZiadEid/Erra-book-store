import useFetchBooks from '../../Hooks/useFetchBooks'
import NormalCard from '../../components/NormalCard'

const AllBooks = () => {
  const { allBooks } = useFetchBooks()

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <div className="py-10">
        <div
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
          data-aos-delay="500"
          className="container"
        >
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">All Books</h1>
          </div>
          <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {
              allBooks.map(book => (
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
        </div>
      </div>
    </div>
  )
}

export default AllBooks