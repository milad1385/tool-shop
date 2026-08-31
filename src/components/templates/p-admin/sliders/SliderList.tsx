import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { ISliderList } from "@/libs/types";
import SliderRow from "./SliderRow";
import { sliderTableHeader } from "@/constants/data";
import EmptyError from "@/components/modules/p-admin/EmptyError";

function SliderList({ data, pagination }: ISliderList) {
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
            {data.map((slide, index) => (
              <SliderRow key={slide._id} index={index + 1} {...slide} />
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
