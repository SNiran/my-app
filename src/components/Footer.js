import { Link } from "react-router-dom";
const Footer = () => {
  const getImageSrc = require("../images/footer-logo.png");

  const contactLinks = ["Phone", "Email", "Address"];
  const socialLinks = ["Facebook", "Instagram", "Twitter"];
  return (
    <footer>
      <div className="footer-logo">
        <img src={getImageSrc} alt="little lemon logo" width="100px" />
      </div>
      <nav>
        <ul>
          <h3>Navigation</h3>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/" className="nav-item">
            About
          </Link>
          <Link to="/" className="nav-item">
            Menu
          </Link>
          <Link to="/reservations" className="nav-item">
            Reservations
          </Link>
          <Link to="/" className="nav-item">
            Order Online
          </Link>
          <Link to="/" className="nav-item">
            Login
          </Link>
        </ul>
        <ul>
          <h3>Contact</h3>
          {contactLinks.map((navItem) => {
            return (
              <li key={navItem} className="nav-item">
                {navItem}
              </li>
            );
          })}
        </ul>
        <ul>
          <h3>Social Media</h3>
          {socialLinks.map((navItem) => {
            return (
              <li key={navItem}>
                <a href="/" className="nav-item">
                  {navItem}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
