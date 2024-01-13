import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// USE ILE BASLAYANLAR HOOK'TUR. NAVIGATE HOOK'U BIR FONK. ICINDE CAGRILABILIR. AMA BIR RETURN ICERISINDE COMPONENT GIBI CAGRILMAZ.
//OZEL HOOK YAZILABILIR.
//NAVIGATE => DYNAMIC ROUTE OLUSTURMAK IICN KULLANILIR.
//LINK.TO ELEMENTI ISE STATIK YONLENDIRMELER ICIN KULLANILIR.

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);


  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4" type="button"
              //ABSOLUTE PATH
              // onClick={()=>navigate(`/people/${id}`)}

              //RELATIVE PATH
               onClick={()=>navigate(`${id}`)}

              // onClick={()=>navigate(`/people/${id}`,{state:person})}
              //NAVIGATE HOOK'U ILE OBJECT DE GONDEREBILIYORUZ. 'PERSON' OBJESINI TEKRAR FETCH ETMEYE GEREK YOK, ZAMAN KAYBI.
            >
              <img className="rounded-2" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
