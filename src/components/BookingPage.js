import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Booking from "./Booking";
import FormProvider from "./FormProvider";

function BookingPage() {
  return (
    <>
      <Header />
      <Hero className="hidden" />
      <FormProvider>
        <Booking />
      </FormProvider>
      <Footer />
    </>
  );
}

export default BookingPage;
