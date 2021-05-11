import Details from "../Details";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection";

import Info from "../Info/Info";
import Navbar from "../Navbar";

import Products from "../Products/Products";

function Home() {
  return (
    <>
      <header className='header'>
        <Navbar />
        <HeroSection />
      </header>
      <Info />
      <Details
        src={"/images/vr-realist.png"}
        title={"Discover A Whole New Reality"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum "
        }
        dark={false}
        direction={"row"}
      />
      <Details
        src={"/images/vr-man.png"}
        title={"Free Yourself And Play For Real"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum "
        }
        dark={true}
        direction={"row-reverse"}
      />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
