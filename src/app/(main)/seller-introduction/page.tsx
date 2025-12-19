import Container from "@/components/modules/main/Container";
import Navbar from "@/components/templates/seller-introduction/Navbar";
import RegisterSteps from "@/components/templates/seller-introduction/RegisterSteps";
import RequiredDocuments from "@/components/templates/seller-introduction/RequiredDocuments";
import SellerBanner from "@/components/templates/seller-introduction/SellerBanner";
import TaxInCategories from "@/components/templates/seller-introduction/TaxInCategories";
import WhyTrazo from "@/components/templates/seller-introduction/WhyTrazo";
import Branches from "../../../components/templates/seller-introduction/Branches";

function page() {
  return (
    <div>
      <Navbar />
      <SellerBanner />
      <Container>
        <div className="px-2 md:px-8">
          <WhyTrazo />
          <RegisterSteps />
          <RequiredDocuments />
        </div>
      </Container>
      <TaxInCategories />
      <Branches />
    </div>
  );
}

export default page;
