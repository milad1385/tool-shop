import Container from "@/components/modules/main/Container";
import About from "@/components/templates/about/About";
import AboutUsSection from "@/components/templates/about/AboutUsSection";
import StaffSlider from "@/components/templates/about/StaffSlider";

function page() {
  return (
    <>
      <Container>
        <About />
        <AboutUsSection />
      </Container>
      <StaffSlider />
    </>
  );
}

export default page;
