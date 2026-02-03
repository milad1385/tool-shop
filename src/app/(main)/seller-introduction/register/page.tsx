import RegisterationSteps from "@/components/templates/seller-introduction/RegisterationSteps";
import Sidebar from "@/components/templates/seller-introduction/Sidebar";

async function page() {
  return (
    <div className="flex">
      <Sidebar />
      <RegisterationSteps />
    </div>
  );
}

export default page;
