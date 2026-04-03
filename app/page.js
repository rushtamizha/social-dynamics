import About from "@/components/About";
import EnquiryForm from "@/components/EnquiryForm";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
    <Hero/>
    <Stats/>
    <About/>
    <WhyChooseUs/>
    <Expertise/>
    <Team/>
    <Testimonials/>
    <EnquiryForm/>
    </>
  );
}
