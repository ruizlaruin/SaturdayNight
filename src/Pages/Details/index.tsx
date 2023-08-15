import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import Card from "../../Components/Card";
import useFetchSingle from "../../Hooks/useFetchSingle";

const Details = () => {
  const { id } = useParams();
  const [charDetails, loader] = useFetchSingle(Number(id));

  return (
    <>
      <div className=" d-flex justify-content-center flex-column align-items-center">
        {loader ? (
          <Loader />
        ) : (
          <>
            <h1>Char Details</h1>
            <Card chars={charDetails} />
          </>
        )}
      </div>
    </>
  );
};
export default Details;
