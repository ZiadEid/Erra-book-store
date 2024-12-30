import { useContext } from "react";
import { ProjectContext } from "../../Context/Project";
import CartTable from "../../components/CartTable";

const Cart = () => {
  const { token } = useContext(ProjectContext)
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <div className="py-10">
        <div
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
          data-aos-delay="500"
          className="container"
        >
          {
            token ?
              <>
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Cart Items</h1>
                </div>
                <CartTable />
              </>
              :
              <div className="h-[300px] w-[300px] mx-auto flex justify-center items-center text-3xl shadow-lg">
                Your Cart is Empty
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart