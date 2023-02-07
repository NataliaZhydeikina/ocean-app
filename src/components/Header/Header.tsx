import './Header.css';
import headerImg from "../../assets/imgs/header.jpg";

const Header = () => {
  return <header>
    <h1>Oceans</h1>
    <img src={headerImg} alt="" />
  </header>;
}

export default Header;