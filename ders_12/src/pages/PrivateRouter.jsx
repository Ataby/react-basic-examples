import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  // const user = true;

  const {user}= useContext(LoginContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
  //OUTLET : HANGI SAYFADAN GELDIYSEN ORANIN 'NESTED ROUTE'INI CALISTIR.
};

export default PrivateRouter;
