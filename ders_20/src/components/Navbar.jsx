import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { clearuser } from "../features/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const user=useSelector ((state)=> state.auth.user);
  // CONSUMING

const dispatch = useDispatch();

const handleLogout =function(){
    dispatch(clearuser());
    navigate ("/login");
  };
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Atabay Media News
          </Typography>

{user?.email ?  <Button color="inherit" onClick={handleLogout} > Logout</Button>
      : <Button color="inherit" onClick={()=> navigate("/login")}>Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
