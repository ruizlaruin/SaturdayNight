const Loader = () => {
  return (
    <div className="d-flex flex row justify-content-center align-items-center">
      <h1>Loading ...</h1>

      <img
        src={require("../Assets/epic-rick-and-morty.gif")}
        alt="loading"
        width="250px"
        height={"200px"}
      />
    </div>
  );
};
export default Loader;
