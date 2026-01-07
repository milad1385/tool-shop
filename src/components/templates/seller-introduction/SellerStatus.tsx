import { sellerStatusBoxes } from "@/constants/data";
import RegisterTitle from "./RegisterTitle";
import SellerRegisterContainer from "./SellerRegisterContainer";
import SellerStatusBox from "./SellerStatusBox";

function SellerStatus() {
  return (
    <SellerRegisterContainer>
      <RegisterTitle content="وضعیت خود را انتخاب کنید" />
      <div className="flex flex-col md:flex-row items-center gap-5 mt-16">
        {sellerStatusBoxes.map((sellerStatusBox) => (
          <SellerStatusBox {...sellerStatusBox} key={sellerStatusBox.id} />
        ))}
      </div>
    </SellerRegisterContainer>
  );
}

export default SellerStatus;
