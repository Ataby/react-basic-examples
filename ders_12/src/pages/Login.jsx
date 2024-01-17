import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginContext } from "../context/LoginProvider";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const Login = () => {
  // const [user, setUser] = useState({ email: "", password: "" });
  //BU BIR LOCAL STATE. ONUN YERINE ARTIK GLOBAL STATE KULLANIYORUZ. CUNKU BASKA SAYFALARDA DA BU VERI BIZE LAZIM.

  // const {user,setuser}=useContext(LoginContext);
  //CONSUMING LOGIN CONTEXT
  const {user,setuser}=useLoginContext( LoginContext);
  //CONSUMING LOGIN CONTEXT WITH  CUSTOM HOOK

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1); 
  };

  console.log(user);
  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email || ""} 
            //VALUE DEGERININ UNDEFINED GELMEMESI GEREKIR, YOKSA HATA VERIR
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password || "" }
            onChange={(e) => setuser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
