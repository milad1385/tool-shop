"use client";
import { useSearchParams } from "next/navigation";
import CancelSellerRegisteration from "./CancelSellerRegisteration";
import MobileMenuBar from "./MobileMenuBar";
import SellerInformation from "./SellerInformation";
import SellerRegisterContainer from "./SellerRegisterContainer";
import SellerStatus from "./SellerStatus";

function RegisterationSteps() {
  const searchParam = useSearchParams();


  const step = Number(searchParam.get("step")) || 1;
  const subStep = Number(searchParam.get("substep")) || 1;
 

  return (
    <SellerRegisterContainer>
      <MobileMenuBar />
      {renderStep(+step, +subStep)}
      <CancelSellerRegisteration />
    </SellerRegisterContainer>
  );
}

function renderStep(step: number, subStep: number) {
  if (step === 1 && subStep === 1) {
    return <SellerStatus />;
  } else if (step === 1 && subStep === 2) {
    return <SellerInformation />;
  }
}

export default RegisterationSteps;
