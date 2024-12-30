import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../Context/Project";
import axios from "axios";

const useFetchBooks = () => {
  const { baseUrl, setIsLoading } = useContext(ProjectContext);
  const [allBooks, setAllBooks] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);
  const [TopBooks, setTopBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/books`);
        setAllBooks(res.data.data);
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allBooks.length > 0) {
      setBestBooks(allBooks.slice(1, 4));
    }
  }, [allBooks]);

  useEffect(() => {
    if (allBooks.length > 0) {
      setTopBooks(allBooks.slice(5, 15));
    }
  }, [allBooks]);

  return { allBooks, bestBooks, TopBooks }
}

export default useFetchBooks