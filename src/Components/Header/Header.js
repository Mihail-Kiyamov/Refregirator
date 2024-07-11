import "./Header.css";
import logo from "../../images/refregirator_icon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого" />
      <Link to="/" className="header__link">
        Организовать
      </Link>
      <Link to="/saved" className="header__link">
        Сохраненые
      </Link>
      <Link to="/about" className="header__link">
        О проекте
      </Link>
    </header>
  );
}

export default Header;
