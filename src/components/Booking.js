import React, { useEffect, useState } from "react";
import { useForm } from "./FormProvider";
import { useNavigate } from "react-router-dom";

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

const Booking = ({ availableTimes, dispatch, submitForm }) => {
  const { form, setForm } = useForm();

  const [isTouched, setIsTouched] = useState({
    name: false,
    date: false,
    guest: false,
    time: false,
    occasion: false,
  });

  const navigate = useNavigate();

  const occasionList = ["Birthday", "Anniversary", "Other"];

  const todaysDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();

    return `${yyyy}-${mm < 10 ? `0${mm}` : mm}-${dd < 10 ? `0${dd}` : dd}`;
  };

  const minDate = todaysDate();

  const isFormValid = () => {
    const validateForm = { ...form };
    return (
      validateForm.name.trim() !== "" &&
      validateForm.date &&
      validateForm.guest &&
      validateForm.time &&
      validateForm.occasion !== "Occasion"
    );
  };

  const clearForm = () => {
    const resetForm = { ...form };
    resetForm.name = "";
    resetForm.date = "";
    resetForm.guest = "";
    resetForm.time = "";
    resetForm.occasion = "Occasion";
    setForm(resetForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", form);
    submitForm(form);
    if (submitForm(form)) {
      navigate("/confirmed");
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      alert("Booking failed");
    }
    clearForm();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="booking">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Booking Details</h1>
          <div className="field">
            <label htmlFor="firstName">
              Name <sup aria-hidden="true">*</sup>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              onBlur={() => setIsTouched({ ...isTouched, name: true })}
              aria-required="true"
              aria-describedby="nameError"
            />
            {isTouched.name ? (
              <ErrorMessage field="name" name={form.name} id="nameError" />
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="date">
              Date <sup aria-hidden="true">*</sup>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              min={minDate}
              max="2023-12-31"
              autoComplete="date"
              value={form.date}
              onChange={(e) => {
                setForm({
                  ...form,
                  date: e.target.value,
                });
                dispatch({
                  type: "updateTimes",
                  payload: new Date(e.target.value),
                });
              }}
              onBlur={() => setIsTouched({ ...isTouched, date: true })}
              aria-required="true"
              aria-describedby="dateError"
            />
            {isTouched.date && form.date === "" ? (
              <ErrorMessage field="date" id="dateError" />
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="time">
              Time <sup aria-hidden="true">*</sup>
            </label>
            <select
              id="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              onBlur={() => setIsTouched({ ...isTouched, time: true })}
              aria-required="true"
              aria-describedby="timeError"
            >
              {availableTimes.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {isTouched.time && form.time === "" ? (
              <ErrorMessage field="time" id="timeError" />
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="guest">
              Number of Guests <sup aria-hidden="true">*</sup>
            </label>
            <input
              type="number"
              id="guest"
              name="guest"
              min="1"
              max="50"
              placeholder="1"
              autoComplete="guest"
              value={form.guest}
              onChange={handleChange}
              onBlur={() => setIsTouched({ ...isTouched, guest: true })}
              aria-required="true"
              aria-describedby="guestError"
            />
            {isTouched.guest && form.guest === "" ? (
              <ErrorMessage field="guest" id="guestError" />
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="occasion">
              What's the Occasion <sup aria-hidden="true">*</sup>
            </label>
            <select
              id="occasion"
              name="occasion"
              autoComplete="occasion"
              value={form.occasion}
              onChange={handleChange}
              onBlur={() => setIsTouched({ ...isTouched, occasion: true })}
              aria-required="true"
              aria-describedby="occasionError"
            >
              <option value="Occasion" default disabled>
                Occasion
              </option>
              {occasionList.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {isTouched.occasion && form.occasion === "Occasion" ? (
              <ErrorMessage field="occasion" id="occasionError" />
            ) : null}
          </div>
          <button
            type="submit"
            disabled={!isFormValid()}
            aria-disabled={!isFormValid()}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default Booking;
