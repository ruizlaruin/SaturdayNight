import { useState, useEffect } from "react";
import { Result } from "../Interfaces/apiInterface";

const useFetchSingle = (id: number) => {
  const [charDetails, setCharDetails] = useState<Result>();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchCharDetail = async (id: number) => {
    try {
      setLoader(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharDetails(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    try {
      setLoader(true);
      fetchCharDetail(id);
      setLoader(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  }, [id]);

  return [charDetails, loader, error];
};
export default useFetchSingle;
