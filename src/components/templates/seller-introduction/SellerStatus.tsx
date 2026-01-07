import { sellerStatusBoxes } from "@/constants/data";
import CancelSellerRegisteration from "./CancelSellerRegisteration";
import MobileMenuBar from "./MobileMenuBar";
import RegisterTitle from "./RegisterTitle";
import SellerRegisterContainer from "./SellerRegisterContainer";
import SellerStatusBox from "./SellerStatusBox";

function SellerStatus() {
  return (
    <SellerRegisterContainer>
      <RegisterTitle content="وضعیت فروشنده را انتخاب کنید" />
      <MobileMenuBar />
      <div className="flex flex-col md:flex-row items-center gap-5 mt-16">
        {sellerStatusBoxes.map((sellerStatusBox) => (
          <SellerStatusBox {...sellerStatusBox} key={sellerStatusBox.id} />
        ))}
      </div>
      <CancelSellerRegisteration/>
    </SellerRegisterContainer>
  );
}

export default SellerStatus;
