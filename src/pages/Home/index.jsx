import Hero from './../../components/Hero';
import BestBooks from '../../components/BestBooks';
import Features from '../../components/Features';
import BookApp from '../../components/BookApp';
import TopBooks from '../../components/TopBooks';
import TestimonialsSec from './../../components/TestimonialsSec';

const Home = () => {
  return (
    <div
      data-aos="fade"
      data-aos-easing="ease-in-out"
      data-aos-duration="700"
      data-aos-delay="500"
      className='bg-white dark:bg-gray-900 dark:text-white duration-200'
    >
      <Hero />
      <BestBooks />
      <Features />
      <BookApp />
      <TopBooks />
      <TestimonialsSec />
    </div>
  )
}

export default Home