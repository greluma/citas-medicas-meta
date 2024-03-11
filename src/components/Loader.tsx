import loader_img from "../assets/images/preloader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader_img} alt="spinner" />
    </div>
  );
};
export default Loader;
