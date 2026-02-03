import { sellerStatusBoxes } from "@/constants/data";
import CancelSellerRegisteration from "./CancelSellerRegisteration";
import MobileMenuBar from "./MobileMenuBar";
import RegisterTitle from "./RegisterTitle";
import SellerRegisterContainer from "./SellerRegisterContainer";
import SellerStatusBox from "./SellerStatusBox";
import SellerStatus from "./SellerStatus";

function RegisterationSteps() {
  return (
    <SellerRegisterContainer>
      <RegisterTitle content="وضعیت فروشنده را انتخاب کنید" />
      <MobileMenuBar />
      <SellerStatus />
      <CancelSellerRegisteration />
    </SellerRegisterContainer>
  );
}

export default RegisterationSteps;
