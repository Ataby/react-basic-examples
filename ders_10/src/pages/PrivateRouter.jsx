import { Navigate, Outlet } from "react-router-dom";
//USE.NAVIGATE HOOK'U => IMPERATIVE YAKLASIM(DONGULER,KOSULLAR,FONKSIYONLAR)
//NAVIGATE => DECLERATIVE YAKLASIM(HAZIR FONKSIYONLAR)

const PrivateRouter = () => {
    const userAuthenticate=false;

  return (
    <div>
        {userAuthenticate ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter