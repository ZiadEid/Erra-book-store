import style from './index.module.css';
import playStoreImg from '../../assets/play_store.png'
import appStoreImg from '../../assets/app_store.png'
import { Link } from 'react-router-dom';

const BookApp = () => {
  return (
    <div className={`bg-gray-100 dark:bg-gray-800 text-white py-10 ${style.bookAppBg}`}>
      <div className="container">
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl sm:text-4xl text-center font-semibold'>
            Read books at your fingertips
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
              <Link to={"/"}>
                <img 
                src={playStoreImg}
                className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] '
                 alt="our application on play store"
                  />
              </Link>
              <Link tp={"/"}>
                <img 
                src={appStoreImg}
                className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] '
                 alt="our application on app store"
                  />
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookApp