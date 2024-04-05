import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Presale from "./components/Presale";
import Chart from "./components/Chart";


const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Presale />
        <Chart />
        <Collaboration />       
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
