import LibraryImg from '../../assets/library.jpg';
import { GrSecure } from "react-icons/gr";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbPaywall } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import Feature from '../Feature';


const Features = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div>
            <img
              src={LibraryImg}
              className='max-w-[400px] w-full h-[350px] block mx-auto drop-shadow-custom object-cover'
              alt="Book Store"
            />
          </div>
          <div className='flex flex-col justify-center gap-6 '>
            <h1 className='text-3xl sm:text-4xl font-bold'>
              Library at your fingertips
            </h1>
            <p className='text-sm text-gray-500 tracking-wide leading-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque quibusdam sapiente est voluptatum eius nostrum veritatis pariatur ut. Neque adipisci aliquid voluptas repudiandae tempora obcaecati harum possimus aliquam labore?
            </p>
            <div className='flex flex-col gap-4'>
              <Feature
                icon={
                  <GrSecure
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'
                  />}
                  feature="Quality Books"
              />
              <Feature
                icon={
                  <MdOutlineDeliveryDining 
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'
                  />}
                  feature="Fast Delivery"
              />
              <Feature
                icon={
                  <TbPaywall
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'
                  />}
                  feature="Easy Payment method"
              />
              <Feature
                icon={
                  <BiSolidOffer
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'
                  />}
                  feature="Get offers on book"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features