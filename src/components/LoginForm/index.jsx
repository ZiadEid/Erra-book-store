import style from './index.module.css'
import axios from 'axios';
import { useFormik } from 'formik';
import { loginSchema } from './LoginSchema';
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiEyeClosed } from "react-icons/pi";
import { FaEye, FaArrowRightLong } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProjectContext } from '../../Context/Project';
import Loader from '../Loader';

const LoginForm = () => {
  const { baseUrl, isLoading, setIsLoading, setToken, setTokenType } = useContext(ProjectContext);
  const navigate = useNavigate();
  // show password state and function
  const [visablePassword, setVisablePassword] = useState(false);
  const passwordInput = useRef();

  const showPassword = () => {
    if (!visablePassword) {
      passwordInput.current.type = 'text'
      setVisablePassword(!visablePassword)
    }
    else {
      passwordInput.current.type = 'password'
      setVisablePassword(!visablePassword)
    }
  }
  // form on submit function
  const onSubmit = async (values, actions) => {
    setIsLoading(true)
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, values);
      setIsLoading(false);
      setToken(res.data.data.token);
      localStorage.setItem('token', res.data.data.token)
      setTokenType(res.data.data.token_type);
      actions.resetForm();
      toast.success('Login successful!', {
        autoClose: 1000,
        onClose: () => navigate('/')
      });
    }
    catch (error) {
      toast.error(error.response.data.message, { autoClose: 3000 });
      setIsLoading(false);
    }
  }
  // formik hook for handling login form actions
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      email: ''
    },
    validationSchema: loginSchema,
    onSubmit
  });
  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-3'
      >
        <input
          type="email"
          name='email'
          placeholder='example@example.com'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${style.outerColor} h-[40px] border border-[#2b6cb033] rounded pl-3 placeholder-[#718096]`}
        />
        {
          errors.email && touched.email &&
          <p className='error text-[#dc3545]'>{errors.email}</p>
        }
        <div className="relative px-0 flex items-center justify-start">
          <input
            className={`${style.outerColor} h-[40px] w-[calc(100%-50px)] border border-[#2b6cb033] rounded pl-3 rounded-r-none placeholder-[#718096]`}
            type="password"
            name='password'
            placeholder='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={passwordInput}
          />
          <div
            onClick={showPassword}
            className="text-black w-[50px] h-[40px] py-0 px-[15.5px] border border[#2b6cb033] rounded-r border-l-0 flex justify-center items-center cursor-pointer"
          >
            {
              visablePassword ?
                <div className='overflow-hidden'>
                  <FaEye
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="400"
                  />
                </div>
                :
                <div className='overflow-hidden'>
                  <PiEyeClosed
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="400"
                  />
                </div>
            }
          </div>
        </div>
        {
          errors.password && touched.password &&
          <p className='error text-[#dc3545]'>{errors.password}</p>
        }
        <Link
          to={'/register'}
          className='text-[#718096] w-fit hover:underline  duration-500 text-[15px] sm:text-[16px]'
        >
          Didn't sign up? Click her to Register
        </Link>
        <button
          disabled={isSubmitting}
          type='submit'
          className='h-[40px] relative flex items-center justify-center gap-4 bg-[#3182ce] hover:bg-[#2b6cb0] text-white border border-[#3182ce] rounded duration-200 overflow-hidden'
        >
          {
            !isLoading ?
              <>
                Sign In
                <FaArrowRightLong className='mt-1' />
              </>
              :
              <Loader
                bg="bg-secondary"
                w="w-[25px]"
                h="h-[25px]"
              />
          }
        </button>
      </form>
    </div>
  )
}

export default LoginForm