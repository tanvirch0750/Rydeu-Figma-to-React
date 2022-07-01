import { Link } from 'react-router-dom';
import iconFlag from '../../assets/flag.png';
import iconHelp from '../../assets/help.png';
import logo from '../../assets/logo.png';
import iconHamburger from '../../assets/menu.png';
import iconUser from '../../assets/user.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="header-left">
        <div className="logo-box">
          <Link to="/">
            {' '}
            <img src={logo} alt="Rydeu" />
          </Link>
        </div>
        <nav className="nav-left">
          <ul className="navigation-left">
            <li className="navigation-left-link">
              <Link to="/transfers">Transfers</Link>
            </li>
            <li className="navigation-left-link">
              <Link to="/buse-hire">Bus Hire</Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="nav-right">
        <ul className="navigation-right">
          <li className="navigation-right-link">
            <img src={iconHelp} alt="help" />
            <Link to="/help">Help</Link>
          </li>
          <li className="navigation-right-link">
            <img src={iconFlag} alt="help" />
            <span>Deutsch</span> <span> | </span>
            <span>EUR</span>
          </li>
          <li className="navigation-right-link">
            <div className="user-hamburger-group">
              <div className="user-group">
                <img src={iconUser} alt="user" />
              </div>
              <button className="hamburger-btn">
                <img src={iconHamburger} alt="hamburger-btn" />
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
