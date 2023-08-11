import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Booking from "./Booking";
import FormProvider from "./FormProvider";
import React from "react";
import { useReducer, useEffect } from "react";

function BookingPage() {
  /* API link not working */
  useEffect(() => {
    //   fetch(
    //     "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("data", data);
    //     });
  }, []);

  /* API Data */
  const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = (s * a) % m) / m;
  };

  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ":00");
      if (random() < 0.5) result.push(i + ":30");
    }

    return result;
  };

  const submitAPI = (formData) => true;
  /* API Data */

  const submitForm = (formData) => {
    const isSuccessfulSubmission = submitAPI(formData);
    return isSuccessfulSubmission;
    // try{}
    // catch{}
  };

  const reducer = (state, action) => {
    if (action.type === "updateTimes") {
      return updateTimes(action.payload);
    }
    // if (action.type === "initializeTimes") {
    //   return initializeTimes(action.payload);
    // }
    return state;
  };

  const updateTimes = (date) => {
    const storedData = JSON.parse(localStorage.getItem("form"));
    if (storedData !== undefined && storedData !== null) {
      const availableTimes = fetchAPI(new Date(storedData.date)).filter(
        (item) => item !== storedData.time
      );
      return availableTimes;
    } else {
      const availableTimes = fetchAPI(date);
      return availableTimes;
    }
  };

  const initializeTimes = () => {
    const todaysAvailableTimes = fetchAPI(new Date());
    return todaysAvailableTimes;
  };

  const initialState = ["11:30 PM", "12:00 PM"];
  const [availableTimes, dispatch] = useReducer(
    reducer,
    initialState,
    initializeTimes
  );

  return (
    <>
      <Header />
      <Hero className="hidden" />
      <FormProvider>
        <Booking {...{ availableTimes, dispatch }} submitForm={submitForm} />
      </FormProvider>
      <Footer />
    </>
  );
}

export default BookingPage;
