import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./App";
import Booking from "./components/BookingForm";
// import BookingPage from "./components/BookingPage";
import FormProvider from "./components/FormProvider";

const mockUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

test("Renders the BookingForm heading", () => {
  render(
    <FormProvider>
      <Booking availableTimes={[]} dispatch submitForm={() => {}} />
    </FormProvider>
  );

  const headingElement = screen.getByTestId("form-heading");
  expect(headingElement).toBeInTheDocument();
});

// describe("Booking details Form", () => {
//   test("User is able to submit the form if input fields are not empty", () => {
//     const name = "John";
//     const date = "20/08/2023";
//     const guest = "2";
//     const time = "17:00";
//     const occasion = "Birthday";
//     const submitForm = jest.fn();
//     render(
//       <FormProvider>
//         <Booking availableTimes={[]}  submitForm={submitForm} />
//       </FormProvider>
//     );

//     const nameInput = screen.getByTestId("name");
//     fireEvent.change(nameInput, { target: { value: name } });

//     const dateInput = screen.getByTestId("date");
//     fireEvent.change(dateInput, { target: { value: date } });

//     const guestInput = screen.getByTestId("guest");
//     fireEvent.change(guestInput, { target: { value: guest } });

//     const timeInput = screen.getByTestId("time");
//     fireEvent.change(timeInput, { target: { value: time } });

//     const occasionInput = screen.getByTestId("occasion");
//     fireEvent.change(occasionInput, { target: { value: occasion } });

//     const submitButton = screen.getByTestId("submit");
//     fireEvent.click(submitButton);

//     fireEvent.submit(screen.getByTestId("form"));

//     expect(submitForm).toHaveBeenCalledWith({
//       name: name,
//       date: date,
//       guest: guest,
//       time: time,
//       occasion: occasion,
//     });

//     expect(mockUsedNavigate).toHaveBeenCalledWith("/confirmed");
//   });
// });
