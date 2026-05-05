import Container from "@/components/modules/p-admin/Container";
import Filters from "@/components/modules/p-admin/Filters";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import SalesChart from "@/components/modules/p-admin/SalesChart";
import DurationChart from "@/components/templates/p-admin/DurationChart";
import RecentOrders from "@/components/templates/p-admin/RecentOrders";
import RecentProducts from "@/components/templates/p-admin/RecentProducts";
import { durationChartData, salesChartData } from "@/constants/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درآمد",
};

function page() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <PageTitle content="میزان درآمد" />
        <Filters
          filterField="last"
          options={[
            { label: "7 روز گذشته", slug: "7" },
            { label: "30 روز گذشته", slug: "30" },
            { label: "90 روز گذشته", slug: "90" },
            { label: "120 روز گذشته", slug: "120" },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <DurationChart title="میزان فروش کالا" data={durationChartData} />
        <RecentProducts title="محصولات خریداری شده اخیر" />
      </div>
      <SalesChart data={salesChartData} />
      <div className="my-8">
        <RecentOrders />
      </div>
    </Container>
  );
}

export default page;
