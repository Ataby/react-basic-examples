import { Link,NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
        {/* LINKLERI "a" ILE VERIRSEK "REACT ROUTER OZELLIGINI KULLANAMIYORUZ. "LINK" ILE VERMEMIZ GEREKIYOR */}
      </li>
      <li>
        {/* <a href="/instructors">Instructors</a> */}
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        {/* <a href="/contact">Contact</a> */}
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;
