import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { LoginContext, useLoginContext } from "../context/LoginProvider";


function Navs() {
  // const {user,setuser}=useContext(LoginContext);
  //CONSUMING

  const {user,setuser}=useLoginContext(LoginContext);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-1024x265.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {!user.email 
            ? (<Link className="nav-link" to="/login">
              Login </Link>) 
            : (<Link onClick={()=> setuser({email: "",password:""})} className="nav-link" to="/login">
              Logout </Link> ) }
            {/* CONDITIONAL RENDERING  */}
             

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
