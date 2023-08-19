import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const form = location.state.formData;

  return (
    <div className="confirmation">
      <h1>{form.name}, your booking has been confirmed!</h1>
      <p>
        <strong>Date:</strong> {form.date}
      </p>
      <p>
        <strong>Time:</strong> {form.time}
      </p>
      <p>
        <strong>Number of Guest(s):</strong> {form.guest}
      </p>
      <p>
        <strong>Occasion:</strong> {form.occasion}
      </p>
    </div>
  );
};
export default BookingConfirmation;
