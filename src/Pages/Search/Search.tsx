import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Result } from "../../Interfaces/apiInterface";
import useFetchSearch from "../../Hooks/useFetchSearch";
import Cards from "../../Components/Cards";
import Loader from "../../Components/Loader";
import Paginator from "../../Components/Paginator";

const Search = () => {
  const { name } = useParams();
  const [url, setUrl] = useState<string>(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  const [chars, loader] = useFetchSearch(url, String(name));
  const [page, setPage] = useState<number>(1);

  const handlePrevious = () => {
    if (chars.info.prev !== null) {
      setUrl(chars.info.prev);
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (chars.info.next !== null) {
      setUrl(chars.info.next);
      setPage(page + 1);
    }
  };

  return (
    <>
      <div
        className="d-flex flex-wrap  align-content-around justify-content-evenly "
        style={{ background: "rgb(184, 184, 72)" }}
      >
        {!loader ? (
          <Loader />
        ) : (
          chars?.results?.map((char: Result, i: number) => {
            return (
              <div key={i} className="py-2">
                <Link
                  className="text-decoration-none "
                  to={`/details/${char.id}`}
                >
                  <Cards chars={char} />
                </Link>
              </div>
            );
          })
        )}
      </div>
      <section className="bg-warning d-flex justify-content-center align-content-center pt-3">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </section>
    </>
  );
};

export default Search;
