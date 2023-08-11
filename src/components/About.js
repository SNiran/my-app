import Text from "./Text";

const About = () => {
  const heading = "Little Lemon";
  const subHeading = "Chicago";
  const para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam";
  const getImageSrc = require("../images/restaurant-about-1.jpg");
  const getImageSrc2 = require("../images/restaurant-about-2.jpg");
  return (
    <section className="about">
      <Text
        className="black"
        title={heading}
        subTitle={subHeading}
        para={para}
      />
      <div className="about-pic">
        <img className="about-img-1" src={getImageSrc} alt="restaurant" />
        <img
          className="about-img-2"
          src={getImageSrc2}
          alt="chef in restaurant"
        />
      </div>
    </section>
  );
};

export default About;
