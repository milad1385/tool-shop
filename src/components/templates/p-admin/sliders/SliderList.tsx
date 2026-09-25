"use client";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { ISlider, ISliderList } from "@/libs/types";
import { useOptimistic } from "react";
import SliderRow from "@/components/templates/p-admin/sliders/SliderRow";

function SliderList({ data, pagination }: ISliderList) {
  const [optimisticSliders, deleteOptimistc] = useOptimistic(
    data,
    (allSliders, id) => {
      return allSliders.filter((slider: ISlider) => slider._id !== id);
    },
  );

  const sliderTableHeader = [
    "شماره",
    "عکس",
    "عنوان",
    "تاریخ",
    "اولویت",
    "وضعیت",
    "عملیات",
  ];
  return (
    <div className="md:section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {sliderTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>
          <Table.Body>
            {optimisticSliders.map((slide, index) => (
              <SliderRow
                key={slide._id}
                index={index + 1}
                onDelete={deleteOptimistc}
                {...slide}
              />
            ))}
          </Table.Body>
        </Table>
        {!data.length && <EmptyError />}
        {data.length > 0 && <Pagination count={pagination.totalItems} />}
      </div>
    </div>
  );
}

export default SliderList;
