import { IOrderDeatils } from "@/libs/types";
import {
  formatDate,
  formattedPrice,
  getOrderInfo,
  getTime,
} from "@/utils/helper";

function OrderDetails({ order }: IOrderDeatils) {
  const { title, backgroundColor } = getOrderInfo(order.status);

  return (
    <div className="mt-5 space-y-4 divide-y-2 px-4 text-sm md:text-base">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <h2>
            <span className="font-Lalezar">شناسه سفارش </span>:
            {order.orderNumber}
          </h2>
          <h3>
            <span className="font-Lalezar">کد پیگیری سفارش </span> :
            {order.trackingCode}#
          </h3>
        </div>
        <div>
          <div
            className={`${backgroundColor} px-4 py-2.5 md:py-2 rounded-md text-white flex-center mt-5 md:mt-0`}
          >
            وضعیت سفارش : {title}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-rowmd:items-center gap-6 pt-3">
        <h2>
          <span className="font-Lalezar">نام سفارش دهنده </span>:{" "}
          {order.address.name}
        </h2>
        <h3>
          <span className="font-Lalezar">
            نام {order.items.length > 1 ? "فروشگاه های" : "فروشگاه"} خریداری شده
          </span>
          :
          {order.items.map((item) => (
            <span key={item._id}>{item.seller.name} </span>
          ))}
        </h3>
        <h3>
          <span className="font-Lalezar">شماره </span> : {order.address.mobile}
        </h3>
        <h3>
          <span className="font-Lalezar">آدرس </span> : {order.address.address}
        </h3>
      </div>
      <div className="flex items-center gap-4 pt-3">
        <h2>
          <span className="font-Lalezar">تاریخ سفارش </span>:{" "}
          {formatDate(order.createdAt)}
        </h2>
        <h3>
          <span className="font-Lalezar">ساعت سفارش </span> :{" "}
          {getTime(order.createdAt)}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 pt-3">
        <h2>
          <span className="font-Lalezar">تاریخ دریافت </span>:{" "}
          {order.status === "delivered" ? "1404/5/16" : "در حال پردازش"}
        </h2>
        <h3>
          <span className="font-Lalezar">بازه تحویل کالا </span> : از{" "}
          {order.deliverySlot.startHour} تا {order.deliverySlot.endHour}
        </h3>
        <h3>
          <span className="font-Lalezar">کد جهت تحویل </span> :{" "}
          {order.status === "delivered" ? "65235" : "در حال پردازش"}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 pt-3">
        <h2>
          <span className="font-Lalezar">مبلغ کل سفارش </span>:{" "}
          {formattedPrice(order.finalPrice)} تومان
        </h2>
        <h3>
          <span className="font-Lalezar">مبلغ تخفیف </span> :{" "}
          {formattedPrice(order.totalDiscount)} تومان
        </h3>
      </div>
    </div>
  );
}

export default OrderDetails;
