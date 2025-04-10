import About from "@/components/templates/about/About";
import AboutUsSection from "@/components/templates/about/AboutUsSection";
import StaffSlider from "@/components/templates/about/StaffSlider";

function page() {
  return (
    <>
      <div className="container mt-24 md:mt-48">
        <About />
        <AboutUsSection />
      </div>
      <StaffSlider />
    </>
  );
}

export default page;
