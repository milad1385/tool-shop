import SellerStatus from "@/components/templates/seller-introduction/SellerStatus";
import Sidebar from "@/components/templates/seller-introduction/Sidebar";

async function page() {
  return (
    <div className="flex">
      <Sidebar />
      <SellerStatus />
    </div>
  );
}

export default page;
