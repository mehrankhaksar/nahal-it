import Hero from "../Hero";
import Services from "../Services";
import Products from "../Products";
import Cooperations from "../Cooperations";

const HomePage = () => {
  return (
    <div className="my-10 md:mt-40">
      <Hero />
      <Services />
      <Products />
      <Cooperations />
    </div>
  );
};

export default HomePage;
