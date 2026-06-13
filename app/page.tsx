import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import HappyHour from "@/components/HappyHour";
import Rewards from "@/components/Rewards";
import Catering from "@/components/Catering";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <HappyHour />
        <Rewards />
        <Catering />
        <WhyChooseUs />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
