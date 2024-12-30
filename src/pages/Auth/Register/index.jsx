import style from './index.module.css'
import logo from '../../../assets/logo.png'
import RegisterForm from '../../../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../Context/Project'
import Loader from '../../../components/Loader'


const Register = () => {
  const { token, isLoading, setIsLoading } = useContext(ProjectContext)
  const navigate = useNavigate()
  useEffect(() => {
    setIsLoading(true);
    if (token) {
      navigate('/');
    }
    else {
      setIsLoading(false);
    }
  }, [token])

  return (
    <div className={`${style.login} relative`}>
      {
        isLoading &&
        <Loader
          bg="bg-white z-[999999]"
          w="w-[70px]"
          h="h-[70px]"
        />
      }
      <div className="bg-[#3182CEB3] absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="container h-[100vh] flex items-center justify-center">
        <div
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
          data-aos-delay="500"
          className="max-w-[500px] w-full relative rounded py-4 px-3 bg-white"
        >
          <div className="w-[70px] sm:w-[90px] mx-auto mb-8 overflow-hidden">
            <img
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1000"
              src={logo}
              loading='lazy'
              className='w-full'
              alt="Book Store"
            />
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register