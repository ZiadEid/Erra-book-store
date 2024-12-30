import { useState } from 'react';
import HeroBooks from '../HeroBooks';
import style from './index.module.css'
import OrderNowBtn from './../OrderNowBtn';
import useFetchBooks from '../../Hooks/useFetchBooks';

const Hero = () => {
  const { bestBooks } = useFetchBooks()
  const [bookId, setBookId] = useState('')
  const [title, setTitle] = useState("");
  const [decription, setDecription] = useState("");


  return (
    <div className={`min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white flex justify-center items-center duration-200 ${style.bgImage}`}>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className='flex flex-col justify-center items-center sm:items-start gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
            <h1
              className='text-5xl sm:text-6xl lg:text-7xl font-bold w-full'
            >
              {title}
            </h1>
            <div className='ml-auto overflow-hidden'>
              <span
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="700"
                className='block text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary text-right text-sm'
              >
                by Anonymous
              </span>
            </div>
            <p className='text-sm'>
              {decription}
            </p>
            <OrderNowBtn
              bookId={bookId}
              style='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:from-secondary hover:to-primary duration-200'
            />
          </div>
          <HeroBooks setBookId={setBookId} setTitle={setTitle} setDecription={setDecription} bestBooks={bestBooks} />
        </div>
      </div>
    </div>
  )
}

export default Hero