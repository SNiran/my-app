import Btn from "./Btn";

const SpecialsItem = ({ name, price, description, getImageSrc }) => {
  return (
    <div className="specials-item">
      <div className="specials-img">
        <img src={getImageSrc} alt={name} width="200px" />
      </div>
      <div className="specials-content">
        <div className="specials-text">
          <h3>{name}</h3>
          <span>${price}</span>
        </div>
        <p>{description}</p>
        <a href="/" className="specials-link">
          Order a Delivery &gt;
        </a>
      </div>
    </div>
  );
};

const Specials = () => {
  const specialsList = [
    {
      name: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../images/greek-salad.jpg"),
    },
    {
      name: "Bruschetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
      getImageSrc: () => require("../images/greek-salad.jpg"),
    },
    {
      name: "Lemon Cake",
      price: 5.99,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../images/lemon-cake.jpg"),
    },
  ];

  return (
    <section className="specials">
      <div className="specials-menu">
        <h1>This week's Specials!</h1>
        <Btn btnText="Online Menu" />
      </div>

      <div className="specials-container">
        {specialsList.map((specialsItem) => {
          return (
            <SpecialsItem
              key={specialsItem.name}
              name={specialsItem.name}
              price={specialsItem.price}
              description={specialsItem.description}
              getImageSrc={specialsItem.getImageSrc()}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Specials;
