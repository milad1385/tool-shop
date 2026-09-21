import Modal from "@/components/modules/main/Modal";
import { IAddressModal } from "@/libs/types";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import AddAddressModal from "./AddAddressModal";
import AddressItem from "./AddressItem";

function AddressModal({ onClose, userAdresses }: IAddressModal) {
  return (
    <div className="w-[340px] md:w-[500px] rounded-md bg-white px-4 py-5">
      <div className="flex items-center justify-between border-b-2 border-b-gray-200 pb-4">
        <h3 className="font-bold text-base md:text-[17px]">آدرس‌های شما</h3>
        <FaXmark
          onClick={() => onClose()}
          className="text-xl text-zinc-500 md:cursor-pointer"
        />
      </div>
      <div className="pt-5">
        {userAdresses?.map((address) => (
          <AddressItem key={address._id} {...address} />
        ))}
      </div>
      <div className="border-t-2 border-b-gray-200 mt-5 pt-5 pb-2">
        <Modal>
          <Modal.Open name="addAddress">
            <button className="flex items-center gap-x-2 text-sm md:text-base text-red-600 font-bold">
              <FaPlus className="text-base md:text-lg" />
              افزودن آدرس جدید
            </button>
          </Modal.Open>
          <Modal.Page name="addAddress">
            <AddAddressModal />
          </Modal.Page>
        </Modal>
      </div>
    </div>
  );
}

export default AddressModal;
