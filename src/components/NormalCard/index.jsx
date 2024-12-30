import React from 'react'
import { Link } from 'react-router-dom'
import AddToWishlist from "../AddToWishlist";

const NormalCard = ({ bookId, bookImg, bookTitle, bookPrice, bookCategory }) => {
  return (
    <div className="relative">
      <Link
        to={`/all-books/${bookId}`}
        className='space-y-3 max-w-[150px]'
      >
        <img
          src={bookImg}
          className='w-full h-[220px] object-cover rounded-md '
          alt={bookTitle}
        />
        <div>
          <h2 className='font-semibold text-center'>
            {bookTitle}
          </h2>
          <div className="flex justify-between items-center">
            <p className='text-sm text-gray-700 dark:text-gray-400'>
              {bookCategory}
            </p>
            <span className='font-bold'>
              {bookPrice}
            </span>
          </div>
        </div>
      </Link>
      <AddToWishlist style={'text-[red] top-1 right-1'} bookId={bookId} />
    </div>
  )
}

export default NormalCard