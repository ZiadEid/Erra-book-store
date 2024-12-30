import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../Context/Project";
import axios from "axios";

const useFetchSingleBook = (bookId) => {
  const { baseUrl, setIsLoading } = useContext(ProjectContext);
  const [book, setBook] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/books/${bookId}`);
        setBook(res.data.data);
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {book}
}

export default useFetchSingleBook