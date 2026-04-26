import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import OrderBox from "@/components/templates/p-admin/OrderBox";

function page() {
  return (
    <Container>
      <div className="mt-6 space-y-6">
        <PageTitle content="جزییات سفارش #1" />

        <OrderBox />
      </div>
    </Container>
  );
}

export default page;
