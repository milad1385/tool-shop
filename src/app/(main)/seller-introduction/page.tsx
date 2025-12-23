import Container from "@/components/modules/main/Container";
import Navbar from "@/components/templates/seller-introduction/Navbar";
import RegisterSteps from "@/components/templates/seller-introduction/RegisterSteps";
import RequiredDocuments from "@/components/templates/seller-introduction/RequiredDocuments";
import SellerBanner from "@/components/templates/seller-introduction/SellerBanner";
import SellersComment from "@/components/templates/seller-introduction/SellersComment";
import TaxInCategories from "@/components/templates/seller-introduction/TaxInCategories";
import WhyTrazo from "@/components/templates/seller-introduction/WhyTrazo";
import Branches from "../../../components/templates/seller-introduction/Branches";
import Questions from "@/components/templates/seller-introduction/Questions";

function page() {
  return (
    <div>
      <Navbar />
      <SellerBanner />
      <Container>
        <div className="px-0 md:px-8">
          <WhyTrazo />
          <RegisterSteps />
          <RequiredDocuments />
        </div>
      </Container>
      <TaxInCategories />
      <Branches />
      <div className="container mt-14 px-0 md:px-8">
        <SellersComment />
      </div>
      <div className="container">
        <Questions />
      </div>
    </div>
  );
}

export default page;
