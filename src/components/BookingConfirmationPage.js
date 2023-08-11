import Header from "./Header";
import Hero from "./Hero";
import BookingConfirmation from "./BookingConfirmation";
import Footer from "./Footer";

function BookingConfirmationPage() {
  return (
    <>
      <Header />
      <Hero className="hidden" />
      <BookingConfirmation />
      <Footer />
    </>
  );
}

export default BookingConfirmationPage;
