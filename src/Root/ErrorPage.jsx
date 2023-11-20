import { Link } from "react-router-dom";
import errorImg from "../assets/20602776_6324913.jpg";
const ErrorPage = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      <img className="w-[50vh]" src={errorImg} alt="" />
      <h3 className="text-xl font-bold">Oops!!</h3>
      <p className="text-3xl">404 Not Found</p>
      <Link to="/" className="mt-2 font-semibold text-lg">
        Return <span className="text-blue-600 ">home</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
