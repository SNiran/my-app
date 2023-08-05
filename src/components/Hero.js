import Text from "./Text";
import Btn from "./Btn";

const Hero = () => {
  const heading = "Little Lemon";
  const subHeading = "Chicago";
  const para =
    "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
  const getImageSrc = require("../images/hero-food.jpg");

  return (
    <section className="hero">
      <div>
        <Text title={heading} subTitle={subHeading} para={para} />
        <Btn btnText="Book a Table" />
      </div>

      <div className="hero-img">
        <img src={getImageSrc} alt="" width="300px" height="350px" />
      </div>
    </section>
  );
};

export default Hero;
