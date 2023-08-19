import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import FormProvider from "./FormProvider";
import React from "react";
import { useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "./Api";

function BookingPage() {
  /* API link not working */
  useEffect(() => {
    // fetch(
    //   "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data", data);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  }, []);

  const reducer = (state, action) => {
    if (action.type === "updateTimes") {
      return updateTimes(action.payload);
    }
    if (action.type === "initializeTimes") {
      return initializeTimes();
    }
    return state;
  };

  const updateTimes = (date) => {
    const availableTimes = fetchAPI(date);
    return availableTimes;
  };

  const initializeTimes = () => {
    const todaysAvailableTimes = fetchAPI(new Date());
    return todaysAvailableTimes;
  };

  const submitForm = (formData) => {
    const isSuccessfulSubmission = submitAPI(formData);
    return isSuccessfulSubmission;
  };

  const initState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <Header />
      <Hero className="hidden" />
      <FormProvider>
        <BookingForm
          {...{ availableTimes, dispatch }}
          submitForm={submitForm}
        />
      </FormProvider>
      <Footer />
    </>
  );
}

export default BookingPage;
