import { useEffect, useState } from "react";

const HeroBooks = ({ setBookId, setTitle, setDecription, bestBooks }) => {
  const [imageId, setImageId] = useState("");

  useEffect(() => {
    if (bestBooks.length > 0) {
      setBookId(bestBooks[0].id)
      setImageId(bestBooks[0].image);
      setTitle(bestBooks[0].title);
      setDecription(bestBooks[0].description);
    }
  }, [bestBooks])

  return (
    <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
      <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center overflow-hidden'>
        <img
          src={imageId}
          className='w-[300px] sm:w-[450px] sm:scale-125 object-contain ax-auto h-[300px]'
        />
      </div>
      {/* Other Image List */}
      <div className='flex justify-center gap-4 lg:flex-col absolute -bottom-[40px] lg:-right-1 lg:top-1/2  lg:-translate-y-1/2 lg:py-2 '>
        {
          bestBooks.map((book) => (
            <img
              key={book.id}
              src={book.image}
              className='max-w-[100px] h-[100px] object-contain hover:scale-110 duration-200 cursor-pointer'
              onClick={() => {
                setBookId(book.id)
                setImageId(book.image);
                setTitle(book.title);
                setDecription(book.description);
              }}
              alt={book.title}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HeroBooks