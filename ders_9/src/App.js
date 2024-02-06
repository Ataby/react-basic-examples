import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {

  //BrowserRouter bileşeni, tarayıcı tabanlı gezinme işlemlerini destekler. BrowserRouter, uygulamanızın URL'sini takip eder ve URL'deki değişikliklere tepki vererek ilgili bileşenleri render eder.
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element= {<Home/>}  />
        <Route path ="/instructors" element={ <Instructors/>} />
        <Route path ="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
