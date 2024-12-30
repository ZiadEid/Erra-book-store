import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../Context/Project';
import axios from 'axios';
import { CartContext } from '../../Context/Cart';

const useFetchCart = () => {
  const { baseUrl, setIsLoading, token, tokenType } = useContext(ProjectContext);
  const { setIsCartItems } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    const fetchData = async () => {
      if (token && tokenType && cartItems.length <= 0) {
        setIsLoading(true);
        try {
          const res = await axios.get(`${baseUrl}/cart`, {
            headers: {
              Authorization: `${tokenType} ${token}`
            }
          });
          setCartItems(res.data.data);
          setIsCartItems(true)
          localStorage.setItem("cartItems", JSON.stringify(res.data.data))
          localStorage.setItem("isCartItems", JSON.stringify(true))
          setIsLoading(false);

        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [token, tokenType, cartItems]);

  return ({ cartItems, setCartItems })
}

export default useFetchCart