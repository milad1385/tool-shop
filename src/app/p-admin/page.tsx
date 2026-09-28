import Container from "@/components/modules/p-admin/Container";
import Filters from "@/components/modules/p-admin/Filters";
import SalesChart from "@/components/modules/p-admin/SalesChart";
import DurationChart from "@/components/templates/p-admin/index/DurationChart";
import RecentOrders from "@/components/templates/p-admin/index/RecentOrders";
import RecentProducts from "@/components/templates/p-admin/index/RecentProducts";
import RecentUser from "@/components/templates/p-admin/index/RecentUsers";
import { subDays } from "date-fns";
import Stats from "@/components/templates/p-admin/index/Stats";
import { durationChartData, salesChartData } from "@/constants/data";
import { Metadata } from "next";
import { IPage } from "@/libs/types";
import { getAllStats } from "@/services/stats.service";

export const metadata: Metadata = {
  title: "پنل ادمین",
};

async function page({ searchParams }: IPage) {
  const { last } = await searchParams;
  const numOfDays = !last ? 7 : last;

  const numQuery = subDays(new Date(), numOfDays).toISOString();

  const { usersCount, sumationOfOrder, productsCount, ordersCount } =
    await getAllStats(numQuery);

  return (
    <Container>
      <Filters
        filterField="last"
        options={[
          { label: "7 روز گذشته", slug: "7" },
          { label: "30 روز گذشته", slug: "30" },
          { label: "90 روز گذشته", slug: "90" },
          { label: "120 روز گذشته", slug: "120" },
        ]}
      />
      <Stats
        usersCount={usersCount}
        ordersCount={ordersCount}
        productsCount={productsCount}
        sumationOfOrder={sumationOfOrder}
      />
      {/* charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <DurationChart title="میزان فروش کالا" data={durationChartData} />
        <RecentUser numQuery={numQuery} />
      </div>
      <SalesChart data={salesChartData} />

      {/* recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        <RecentProducts numQuery={numQuery} />
        <RecentOrders numQuery={numQuery} />
      </div>
    </Container>
  );
}

export default page;
