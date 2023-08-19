const ErrorMessage = (props) => {
  const regEx = "^[A-Za-z]+((\\s)?([A-Za-z])+)*$";

  const validNames = (name) => {
    if (name.trim() === "") {
      return (
        <p id="props.id" role="alert">
          Please enter your name
        </p>
      );
    } else if (name.trim().length < 2) {
      return (
        <p id="props.id" role="alert">
          Min required length is 2. Please enter valid name
        </p>
      );
    } else if (name.match(regEx) === null) {
      return (
        <p id="props.id" role="alert">
          Please enter valid name
        </p>
      );
    } else return null;
  };

  return (
    <div className="FieldError">
      {props.field === "name" && validNames(props.name)}
      {props.field === "date" && (
        <p id="props.id" role="alert">
          Please select booking date
        </p>
      )}
      {props.field === "time" && (
        <p id="props.id" role="alert">
          Please select booking time
        </p>
      )}
      {props.field === "guest" && (
        <p id="props.id" role="alert">
          Please select number of guests
        </p>
      )}
      {props.field === "occasion" && (
        <p id="props.id" role="alert">
          Please select occasion
        </p>
      )}
    </div>
  );
};

export default ErrorMessage;
