import { sellerStatusBoxes } from "@/constants/data";
import SellerStatusBox from "./SellerStatusBox";

function SellerStatus() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 mt-16">
      {sellerStatusBoxes.map((sellerStatusBox) => (
        <SellerStatusBox {...sellerStatusBox} key={sellerStatusBox.id} />
      ))}
    </div>
  );
}

export default SellerStatus;
