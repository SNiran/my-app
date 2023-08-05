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
        <img src={getImageSrc} alt="" width="300px" />
        <img src={getImageSrc2} alt="" width="300px" />
      </div>
    </section>
  );
};

export default About;
