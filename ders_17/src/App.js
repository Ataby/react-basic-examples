import logo from './logo.svg';
import './App.css';
import { useMemo,useState } from 'react';

const users =[
  {id:"1",name:"Toby"},
  {id:"2",name:"Amanda"},
  {id:"3",name:"Jennifer"},
  {id:"4",name:"Jack"},
  {id:"5",name:"Oliver"},
  {id:"6",name:"Chris"},
  {id:"7",name:"Robert"},
  {id:"8",name:"Angelina"},
];

function App() {
  const [text, settext] = useState("");
  const [search, setsearch] = useState("");

  const handleText = function(e){
    settext(e.target.value);
  }
  
  const handleSearch =function(){
    setsearch(text);
  }

  const filteredUsers = useMemo(()=>users.filter((user)=> {
    console.log("filtered users has invoked from MEMO")
    return user.name.toLowerCase().includes(search.toLowerCase());
  }),[search]);

  // const filteredUsers = users.filter((user)=> {
  //   console.log("filtered users has invoked from MEMO")
  //   return users.name.toLowerCase().includes(search.toLowerCase());
  // }) 
  //USE.MEMO KULLANMADAN ONCEKI HALI BU

  return (
    <div className="App">
      <input type='text' onChange={handleText}/>
      <button type='button' onClick={handleSearch}>Search</button>
      <List list={filteredUsers}/>
    </div>
  );
}
const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
         <li key={item.id} >{item.name}  </li>
      ))}
    </ul>
  );
};

 

export default App;
