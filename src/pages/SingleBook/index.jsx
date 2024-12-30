import BookDetails from "../../components/BookDetails"

const SingleBook = () => {
  return (
    <div className='min-h-[100vh] h-full bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <div className="py-10">
        <div
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
          data-aos-delay="500"
          className="container"
        >
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Single Books
            </h1>
          </div>
          <BookDetails />
        </div>
      </div>
    </div>
  )
}

export default SingleBook