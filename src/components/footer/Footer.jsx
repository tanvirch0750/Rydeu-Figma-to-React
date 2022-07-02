import { Link } from 'react-router-dom';
import footerLogo from '../../assets/footer_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-container">
          <div className="footer-logo-box">
            <img src={footerLogo} alt="Rydeu" />
            <p>Solution for all ground transfers</p>
            <p>Connect with us</p>
          </div>
          <nav className="footer-nav">
            <h2>Company</h2>
            <ul className="footer-navigation">
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms and conditions</Link>
              </li>
              <li>
                <Link to="/">Imprint</Link>
              </li>
              <li>
                <Link to="/">Careers / Jobs</Link>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <h2>Help Center</h2>
            <ul className="footer-navigation">
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">Customer FAQs</Link>
              </li>
              <li>
                <Link to="/">Business FAQs</Link>
              </li>
              <li>
                <Link to="/">Supplier FAQs</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <h2>Our Services</h2>
            <ul className="footer-navigation">
              <li>
                <Link to="/">Airport Transfer</Link>
              </li>
              <li>
                <Link to="/">City Transfer</Link>
              </li>
              <li>
                <Link to="/">Business</Link>
              </li>
              <li>
                <Link to="/">Supplier</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="copyright-text">
          Copyright ©️ 2020 rydeu.com All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
