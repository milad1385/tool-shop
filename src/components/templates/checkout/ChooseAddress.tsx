"use client";
import Modal from "@/components/modules/main/Modal";
import AddAddressModal from "./AddAddressModal";
import AddressBox from "./AddressBox";
import AddressModal from "./AddressModal";
import { IChooseAddress } from "@/libs/types";

function ChooseAddress({
  userAdresses,
  activeAddress,
  onActive,
}: IChooseAddress) {
  return (
    <Modal>
      {userAdresses?.length ? (
        userAdresses.map((addressItem) => (
          <AddressBox
            key={addressItem._id}
            address={addressItem.address}
            id={addressItem._id}
            onActive={onActive}
            activeAddress={activeAddress}
          />
        ))
      ) : (
        <Modal.Open name="addAddress">
          <button className="flex items-center justify-center py-2 rounded-md bg-stone-800 hover:bg-stone-900 px-6 text-white mt-5">
            افزودن آدرس
          </button>
        </Modal.Open>
      )}

      <Modal.Page name="addAddress">
        <AddAddressModal />
      </Modal.Page>
      <Modal.Page name="address">
        <AddressModal userAdresses={userAdresses} />
      </Modal.Page>
    </Modal>
  );
}

export default ChooseAddress;
