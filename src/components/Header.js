import Nav from "./Nav";
const Header = () => {
  const getImageSrc = require("../images/little-lemon-logo.png");
  return (
    <header>
      <div className="logo">
        <img src={getImageSrc} alt="little lemon website logo" width="200px" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
