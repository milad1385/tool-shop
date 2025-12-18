import Container from "@/components/modules/main/Container";
import Navbar from "@/components/templates/seller-introduction/Navbar";
import RegisterSteps from "@/components/templates/seller-introduction/RegisterSteps";
import SellerBanner from "@/components/templates/seller-introduction/SellerBanner";
import WhyTrazo from "@/components/templates/seller-introduction/WhyTrazo";

function page() {
  return (
    <div>
      <Navbar />
      <SellerBanner />
      <Container>
        <div className="px-2 md:px-8">
          <WhyTrazo />
          <RegisterSteps />
        </div>
      </Container>
    </div>
  );
}

export default page;
