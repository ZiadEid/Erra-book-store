import style from './index.module.css'
import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProjectContext } from '../../Context/Project';
import Loader from '../Loader';
import { orderSchema } from './orderSchema';
import { CartContext } from '../../Context/Cart';

const OrderForm = () => {
  const { baseUrl, token, tokenType, isLoading, setIsLoading } = useContext(ProjectContext);
  const { handelOrderPopup } = useContext(CartContext);

  // form on submit function
  const onSubmit = async (values, actions) => {
    setIsLoading(true)
    try {
      const res = await axios.post(`${baseUrl}/orders`, values, {
        headers: {
          Authorization: `${tokenType} ${token}`
        }
      });
      toast.success('Order Is Done!', {
        autoClose: 1000,
        onClose: () => handelOrderPopup()
      });
      setIsLoading(false);
      actions.resetForm();
    }
    catch (error) {
      toast.error(error.response.data.message, { autoClose: 3000 });
      setIsLoading(false);
    }
  }
  // formik hook for handling login form actions
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      customerAddress: '',
      notes: ''
    },
    validationSchema: orderSchema,
    onSubmit
  });
  return (
    <div className='mt-5'>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-3'
      >
        <input
          type="text"
          name='customerName'
          placeholder='Full Name [first middel last]'
          value={values.customerName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${style.outerColor} text-black h-[40px] border border-[#2b6cb033] rounded pl-3 placeholder-[#718096]`}
        />
        {
          errors.customerName && touched.customerName &&
          <p className='error text-[#dc3545]'>{errors.customerName}</p>
        }
        <input
          type="email"
          name='customerEmail'
          placeholder='example@example.com'
          value={values.customerEmail}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${style.outerColor} text-black h-[40px] border border-[#2b6cb033] rounded pl-3 placeholder-[#718096]`}
        />
        {
          errors.customerEmail && touched.customerEmail &&
          <p className='error text-[#dc3545]'>{errors.customerEmail}</p>
        }
        <input
          type="number"
          name='customerPhone'
          placeholder='Phone Number'
          value={values.customerPhone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${style.outerColor} text-black h-[40px] border border-[#2b6cb033] rounded pl-3 placeholder-[#718096]`}
        />
        {
          errors.customerPhone && touched.customerPhone &&
          <p className='error text-[#dc3545]'>{errors.customerPhone}</p>
        }
        <input
          type="text"
          name='customerAddress'
          placeholder='Adress'
          value={values.customerAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${style.outerColor} text-black h-[40px] border border-[#2b6cb033] rounded pl-3 placeholder-[#718096]`}
        />
        {
          errors.customerAddress && touched.customerAddress &&
          <p className='error text-[#dc3545]'>{errors.customerAddress}</p>
        }
        <textarea
          name="notes"
          placeholder='write your notes'
          value={values.notes}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${style.outerColor} text-black h-[40px] border border-[#2b6cb033] rounded pl-3 placeholder-[#718096]`}
        >
        </textarea>
        {
          errors.notes && touched.notes &&
          <p className='error text-[#dc3545]'>{errors.notes}</p>
        }
        <button
          disabled={isSubmitting}
          type='submit'
          className='h-[40px] relative flex items-center justify-center gap-4 bg-[#3182ce] hover:bg-[#2b6cb0] text-white border border-[#3182ce] rounded duration-200 overflow-hidden'
        >
          {
            !isLoading ?
              <>
                Order Now
                <FaArrowRightLong className='mt-1' />
              </>
              :
              <Loader
                bg="bg-[#ffffff44]"
                w="w-[25px]"
                h="h-[25px]"
              />
          }
        </button>
      </form>
    </div>
  )
}

export default OrderForm