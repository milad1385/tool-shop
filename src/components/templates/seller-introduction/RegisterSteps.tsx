import { sellerRegisterSteps } from "@/constants/data";
import SvgShape from "./SvgShape";
import Title from "./Title";
import RegisterStep from "./RegisterStep";

function RegisterSteps() {
  return (
    <div className=" mt-16 md:mt-44 relative mb-96">
      <Title content="فرآیند شروع کار" />
      <SvgShape />
      <div className="md:px-12 flex items-center justify-evenly flex-wrap gap-x-4 gap-y-6 mt-7 md:mt-0">
        {sellerRegisterSteps.map((step) => (
          <RegisterStep {...step} key={step.id} />
        ))}
      </div>
    </div>
  );
}

export default RegisterSteps;
