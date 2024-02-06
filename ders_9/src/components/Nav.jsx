import { Link,NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
        {/* LINKLERI "a" ILE VERIRSEK "REACT ROUTER OZELLIGINI KULLANAMIYORUZ. "LINK" ILE VERMEMIZ GEREKIYOR */}
        {/* "Link" bileşeni, sayfa yenilenmesi olmaksızın uygulama içindeki rotalara yönlendirmek için kullanılır. Bu, tek sayfa uygulamaları için daha düzgün bir deneyim sağlar ve sayfa yenilenmesini önler. Ayrıca, tarayıcı geçmişiyle uyumlu olarak çalışır ve geçmişi güncelleyerek tarayıcı geri ve ileri düğmelerinin beklenen şekilde çalışmasını sağlar. (CHAT GPT) */}
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
