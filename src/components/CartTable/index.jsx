import { useContext, useEffect } from "react";
import useFetchCart from "../../Hooks/useFetchCart";
import { CartContext } from "../../Context/Cart";

const CartTable = () => {
  const { cartItems } = useFetchCart();
  const { handelOrderPopup } = useContext(CartContext);

  return (
    <div>
      <div className="grid grid-cols-4 gap-0 place-items-center text-center bg-white dark:bg-gray-800 duration-200 shadow-lg p-4">
        <ul className="flex flex-col gap-6">
          <li>Book Id</li>
          {
            cartItems.map(cartItem => (
              <li
                key={cartItem.cartId}
              >
                {cartItem.bookId}
              </li>
            ))
          }
        </ul>
        <ul className="flex flex-col gap-6">
          <li>Price</li>
          {
            cartItems.map(cartItem => (
              <li
                key={cartItem.cartId}
              >
                {cartItem.price}
              </li>
            ))
          }
        </ul>
        <ul className="flex flex-col gap-6">
          <li>QTY</li>
          {
            cartItems.map(cartItem => (
              <li
                key={cartItem.cartId}
              >
                {cartItem.qty}
              </li>
            ))
          }
        </ul>
        <ul className="flex flex-col gap-6">
          <li>Total Price</li>
          {
            cartItems.map(cartItem => (
              <li
                key={cartItem.cartId}
              >
                {cartItem.totalPrice}
              </li>
            ))
          }
        </ul>
      </div>
      <button
        onClick={() => handelOrderPopup()}
        className="bg-gradient-to-r from-primary to-secondary text-white mt-3 ml-auto px-10 py-3 rounded flex items-center hover:from-secondary hover:to-primary duration-200"
      >
        Checkout
      </button>
    </div>
  )
}

export default CartTable