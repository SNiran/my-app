import React, { useState } from "react";
import { useForm } from "./FormProvider";

const ErrorMessage = () => {
  return <p className="FieldError">Please enter your name</p>;
};

const Booking = () => {
  const { form, setForm } = useForm();

  const [isTouched, setIsTouched] = useState(false);

  //   const handleChange = (e) => {
  //     setForm({
  //       ...form,
  //       [e.target.name]: e.target.value,
  //     });
  //   }

  const occasionList = ["Birthday", "Anniversary", "Other"];
  const boookingTime = [
    "11:30 PM",
    "12:00 PM",
    "12:30 PM",
    "1:00 Pm",
    "1:30 PM",
    "2:00 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  const minDate = `${yyyy}-${mm < 10 ? `0${mm}` : mm}-${
    dd < 10 ? `0${dd}` : dd
  }`;

  //   const resetIsTouched = () => {
  //     setIsTouched(false);
  //   };

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
    clearForm();
  };
  return (
    <section className="booking">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Booking Details</h1>
          <div className="field">
            <label htmlFor="firstName">
              Name <sup>*</sup>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              onBlur={() => setIsTouched(true)}
              required
            />
            {isTouched && form.name.trim() === "" ? <ErrorMessage /> : null}
            {console.log(isTouched)}
          </div>

          <div className="field">
            <label htmlFor="date">
              Date <sup>*</sup>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              min={minDate}
              max="2023-12-31"
              value={form.date}
              onChange={(e) =>
                setForm({
                  ...form,
                  date: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="time">
              Time <sup>*</sup>
            </label>
            <select
              id="time"
              value={form.time}
              onChange={(e) =>
                setForm({
                  ...form,
                  time: e.target.value,
                })
              }
            >
              {/* <option value="Slot" default disabled>
                Choose Time Slot
              </option> */}
              {boookingTime.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="field">
            <label htmlFor="guests">
              Number of Guests <sup>*</sup>
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="50"
              placeholder="1"
              value={form.guest}
              onChange={(e) =>
                setForm({
                  ...form,
                  guest: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="occasion">
              What's the Occasion <sup>*</sup>
            </label>
            <select
              id="occasion"
              value={form.occasion}
              onChange={(e) =>
                setForm({
                  ...form,
                  occasion: e.target.value,
                })
              }
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
          </div>
          <button type="submit" disabled={!isFormValid()}>
            Submit
          </button>

          {/* <p className="note">
            <sup>*</sup> required field
          </p> */}
        </fieldset>
      </form>
    </section>
  );
};

export default Booking;
