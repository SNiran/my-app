import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        {/* {navLinks.map((navItem) => {
            return <li key={navItem}>{navItem}</li>;
          })} */}

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
    </nav>
  );
};

export default Nav;
