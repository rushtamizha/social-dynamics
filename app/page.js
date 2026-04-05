import About from "@/components/About";
import EnquiryForm from "@/components/EnquiryForm";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="bg-white">
    {/* 1. The Hook: High-impact entry */}
    <Hero />

    {/* 2. Instant Credibility: Show numbers before they even read the details */}
    <Stats />

    {/* 3. The Story: Who is Fareworks and what is the mission? */}
    <About />

    {/* 4. The Logic: Detailed breakdown of what you actually do */}
    <Expertise />

    {/* 5. The Differentiator: Why choose you over a competitor? */}
    <WhyChooseUs />

    {/* 6. Human Connection: Putting faces to the brand */}
    <Team />

    {/* 7. Social Proof: Letting others do the selling for you */}
    <Testimonials />

    {/* 8. Conversion: The final close */}
    <EnquiryForm />

    <FAQ/>
</main>
  );
}
