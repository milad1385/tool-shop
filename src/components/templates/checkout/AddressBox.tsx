import Modal from "@/components/modules/main/Modal";
import { HiChevronLeft } from "react-icons/hi";
import AddressModal from "./AddressModal";
import { FaTruck } from "react-icons/fa";

function AddressBox({ address, id, activeAddress, onActive }) {
  const activeItem = activeAddress === id;
  return (
    <>
      <div
        onClick={() => onActive(id)}
        className={`border ${activeItem ? "border-yellow-500" : "border-zinc-300"} p-4 md:cursor-pointer rounded-lg flex items-center gap-x-4 mt-5`}
      >
        <FaTruck className="text-zinc-700 text-lg" />
        <div className="space-y-3 flex-1">
          <div className="flex items-center justify-between">
            <h3
              className={`text-xs md:text-base ${activeItem ? "text-yellow-500" : "text-zinc-400"}`}
            >
              ارسال به آدرس انتخاب شده
            </h3>
            <Modal.Open name="address">
              <span
                className={`text-xs md:text-sm flex items-center gap-x-1 ${activeItem ? "text-yellow-500" : "text-zinc-400"}`}
              >
                تغییر آدرس
                <HiChevronLeft />
              </span>
            </Modal.Open>
          </div>
          <h4 className="text-zinc-600 text-sm">{address}</h4>
        </div>
      </div>
      <Modal.Page name="address">
        <AddressModal />
      </Modal.Page>
    </>
  );
}

export default AddressBox;
