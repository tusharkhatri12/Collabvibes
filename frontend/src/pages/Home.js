import Hero from "../components/Hero";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logos from "../components/Logos";
import Stats from "../components/Stats";
import PricingCards from "../components/PricingCards";
import Testimonials from "../components/Testimonials";
import HiringCalculator from "../components/HiringCalculator";
import Features from "../components/Features";
function Home(){
 return(
  <div>
   
   <Navbar variant="dark"/>
   <Hero/>
   <Features/>
   <Services/>
   <HiringCalculator/>
   <Logos/>
   <Stats/>
   <PricingCards/>
   <Testimonials/>
    <Footer/>
  </div>
 );
}

export default Home;