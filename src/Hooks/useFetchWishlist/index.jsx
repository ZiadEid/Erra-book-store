import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../Context/Project';
import axios from 'axios';

const useFetchWishlist = () => {
  const { baseUrl, setIsLoading, token, tokenType } = useContext(ProjectContext);
  const [wishlist, setwishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);

  useEffect(() => {
    const fetchData = async () => {
      if (token && tokenType && wishlist.length <= 0) {
        setIsLoading(true);
        try {
          const res = await axios.get(`${baseUrl}/wishlist/get`, {
            headers: {
              Authorization: `${tokenType} ${token}`
            }
          });
          setwishlist(res.data.data);
          localStorage.setItem("wishlist", JSON.stringify(res.data.data))
          setIsLoading(false);

        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [token, tokenType, wishlist]);

  return ({ wishlist })
}

export default useFetchWishlist