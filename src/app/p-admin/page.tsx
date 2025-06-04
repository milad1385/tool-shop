import Container from "@/components/modules/p-admin/Container";
import Filters from "@/components/modules/p-admin/Filters";
import SalesChart from "@/components/modules/p-admin/SalesChart";
import DurationChart from "@/components/templates/p-admin/DurationChart";
import RecentProducts from "@/components/templates/p-admin/RecentProducts";
import RecentUser from "@/components/templates/p-admin/RecentUsers";

import Stats from "@/components/templates/p-admin/Stats";
import React from "react";

function page() {
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
      <Stats />
      {/* charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <DurationChart/>
        <RecentUser/>
      </div>
      <SalesChart/>

      {/* recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <RecentProducts/>
      </div>
    </Container>
  );
}

export default page;
