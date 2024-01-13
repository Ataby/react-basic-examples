import errorImg from "../img/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container border-2 text-center mt-4">
      <img className="  border-2" src={errorImg} alt="" />
      <div>
        <button onClick={()=>navigate("/")} className="btn btn-success me-2">Home</button>
        <button onClick={()=>navigate(-1)} className="btn btn-warning text-white">Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
