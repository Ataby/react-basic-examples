import { useState } from "react";

const Form = () => {

  //USE.STATE.SNIPPET KISAYOLDUR
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password, setPass] = useState("")
  //CONST, LET, VAR ILE 'USERNAME' TANIMLAYABILIRIZ ANCAK DEGISIKLIKLER HEMEN DOM'A BASILMAZ.
  //STATIC DEGISKEN SUREKLI RENDER EDILMEDIGI ICIN DOM'A GITMIYOR.
  //BU UCUNU OBJECT TIPI ILE TEK HOOK'A CEVIREBILIRIZ. 
  //HERBIR INPUT'A BIR STATE VERDIK, INPUT DEGISIMI ICIN ONCHANGE EVENT'I KULLANDIK.VALUE PROP'U ILE DOM'A BASTIK.

  
  const handleUsername=(e)=>{
    // console.log(e.target.value);
    setUsername(e.target.value)
  }
  // const handleEmail=(e)=>{
  //   // console.log(e.target.value);
  //   setEmail(e.target.value)
  // }
  // const handlePass=(e)=>{
  //   // console.log(e.target.value);
  //   setPass(e.target.value)
  // }
  const handleSubmit=(e)=>{
    // e.preventDefault();
    console.log(e.target);
    console.log("submitted");
    alert(`username: ${username}
          email: ${email}
          password: ${password}`)
  }
  
  //INPUT GIBI ELEMENTLERIN SELF CLOSING '/' OLMASI LAZIM.
  return (

      <form onSubmit={handleSubmit}>
        <h1 className="display-5 text-danger">FORMS</h1>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
          Username <span>"{username}"</span>
          </label>
          <input
          type="text"
          className="form-control"
          id="userName"
          aria-describedby="emailHelp"
          onChange={handleUsername}
          value={username}/>    
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
          Email address
          </label>
          <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>    
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e)=>setPass(e.target.value)}
          />
        </div>
  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

  );
};

export default Form;
