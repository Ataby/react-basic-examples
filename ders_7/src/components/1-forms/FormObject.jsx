import { useState } from "react";

const FormObject = () => {

  //USE.STATE.SNIPPET KISAYOLDUR
  const[formValues,setFormvalues]=useState({
    username:"", email:"", password:""
  });
 
  const {username,email,password}=formValues;

  const handleSubmit=(e)=>{
    // e.preventDefault();
    console.log(e.target);
    console.log("submitted");
    alert(`username: ${username}
          email: ${email}
          password: ${password}`)
  }

  const handleForm =(e)=>{
    console.log(e.target.id);
    //ICINDEKI OBJELERE ERISIM SAGLAYABILMEK ICIN ACMAMIZ GEREKIYOR.BU SEKILDE AYRI AYRI DIZILER HALINE GELMIS OLUYOR
    setFormvalues({...formValues, [e.target.id]:e.target.value })
    //OBJEYI ACIP ILGILI KEY'E ILGILI VALUE DEGERI AKTARILMIS OLDU
    //OBJELERDE SQUARE BRACKET ILE ICINE DEGISKEN YAZDIK
  }
  
  //INPUT GIBI ELEMENTLERIN SELF CLOSING '/' OLMASI LAZIM.
  return (

      <form onSubmit={handleSubmit}>
        <h1 className="display-5 text-danger">FORM OBJECT</h1>
        <div className="mb-3">
    <label htmlFor="userName" className="form-label">
      Username <span>"{username}"</span>
    </label>
    <input
      type="text"
      className="form-control"
      id="username"
      aria-describedby="emailHelp"
      onChange={handleForm}
      value={username}
    />
    
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
      onChange={handleForm}
    />
    
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
      onChange={handleForm}
    />
  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

  );
};

export default FormObject;
