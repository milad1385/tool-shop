import Container from "@/components/modules/main/Container";
import Navbar from "@/components/templates/seller-introduction/Navbar";
import SellerBanner from "@/components/templates/seller-introduction/SellerBanner";
import WhyTrazo from "@/components/templates/seller-introduction/WhyTrazo";

function page() {
  return (
    <div>
      <Navbar />
      <SellerBanner />
      <Container>
        <WhyTrazo/>
      </Container>
    </div>
  );
}

export default page;
