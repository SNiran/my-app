import Text from "./Text";
import Btn from "./Btn";
// import { useLocation } from "react-router-dom";

const Hero = ({ className }) => {
  const heading = "Little Lemon";
  const subHeading = "Chicago";
  const para =
    "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
  const getImageSrc = require("../images/hero-food.jpg");

  //   const location = useLocation();
  {
    /* {location.pathname === "/reservations" ? null : (
          <Btn btnText="Book a Table" />
        )} */
  }

  return (
    <section className="hero">
      <div>
        <Text title={heading} subTitle={subHeading} para={para} />
        <Btn btnText="Book a Table" className={className} />
      </div>

      <div className="hero-img">
        <img
          src={getImageSrc}
          alt="restaurant food"
          width="300px"
          height="350px"
        />
      </div>
    </section>
  );
};

export default Hero;
