import { useState, useEffect } from "react";
import { Result } from "../Interfaces/apiInterface";

const useFetchMultiple = (currentPage: number) => {
  const [chars, setChars] = useState<Result[]>([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState<any>(null);

  //API consumption
  const fetchData = async (currentPage: number) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      const data = await res.json();
      setChars(data.results);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      setLoader(false);
      fetchData(currentPage);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoader(true);
    }
  }, [currentPage]);

  return [chars, loader, error];
};
export default useFetchMultiple;
