const TestimonialsItem = ({ name, description, getImageSrc, getUserImg }) => {
  return (
    <div className="testimonials-item">
      <div className="testimonials-rating">
        <img src={getImageSrc} alt="" width="100px" />
      </div>
      <div className="testimonials-content">
        <div className="testimonials-name">
          <img src={getUserImg} alt="" />
          <h4>{name}</h4>
        </div>
        <blockquote className="testimonials-review">{description}</blockquote>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Nancy",
      getUserImg: () => require("../images/profile-1.jpg"),
      description: "“Greek Salad is tasty”",
      getImageSrc: () => require("../images/rating.png"),
    },
    {
      name: "Ryan",
      getUserImg: () => require("../images/profile-2.jpg"),
      description: "“Really enjoyed the atmosphere”",
      getImageSrc: () => require("../images/rating.png"),
    },
    {
      name: "Chris",
      getUserImg: () => require("../images/profile-3.jpg"),
      description: "“Greek Salad is excellent”",
      getImageSrc: () => require("../images/rating.png"),
    },
    {
      name: "Naina",
      getUserImg: () => require("../images/profile-4.jpg"),
      description: "“Awesome delicious food”",
      getImageSrc: () => require("../images/rating.png"),
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-title">
        <h1>Testimonials</h1>
      </div>

      <div className="testimonials-container">
        {testimonialsList.map((item) => {
          return (
            <TestimonialsItem
              key={item.name}
              name={item.name}
              description={item.description}
              getImageSrc={item.getImageSrc()}
              getUserImg={item.getUserImg()}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
