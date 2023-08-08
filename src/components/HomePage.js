import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import About from "./About";

function HomePage() {
  return (
    <>
      <Header />
      <Hero className="inline-block" />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default HomePage;
