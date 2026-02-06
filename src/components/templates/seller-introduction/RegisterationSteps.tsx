"use client";
import { useSearchParams } from "next/navigation";
import CancelSellerRegisteration from "./CancelSellerRegisteration";
import MobileMenuBar from "./MobileMenuBar";
import SellerInformation from "./SellerInformation";
import SellerRegisterContainer from "./SellerRegisterContainer";
import SellerStatus from "./SellerStatus";
import SellerAddress from "./SellerAddress";
import dynamic from "next/dynamic";
import PanelEducation from "./PanelEducation";
const SellerLocation = dynamic(() => import("./SellerLocation"), {
  ssr: false,
  loading: () => <div>در حال بارگذاری نقشه...</div>,
});

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
  } else if (step === 2 && subStep === 1) {
    return <SellerAddress />;
  } else if (step === 2 && subStep === 2) {
    return <SellerLocation />;
  } else if (step === 3 && subStep === 1) {
    return <PanelEducation />;
  }
}

export default RegisterationSteps;
