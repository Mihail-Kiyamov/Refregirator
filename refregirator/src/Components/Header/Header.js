import "./Header.css";
import logo from "../../images/refregirator_icon.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого" />
      <a href="/" className="header__link">
        Организовать
      </a>
      <a href="/saved" className="header__link">
        Сохраненые
      </a>
      <a href="/about" className="header__link">
        О проекте
      </a>
    </header>
  );
}

export default Header;
