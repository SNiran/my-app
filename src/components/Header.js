import Nav from "./Nav";
const Header = () => {
  const getImageSrc = require("../images/little-lemon-logo.png");
  return (
    <header>
      <div className="logo">
        <img src={getImageSrc} alt="" width="200px" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
