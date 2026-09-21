"use client";
import Modal from "@/components/modules/main/Modal";
import AddAddressModal from "./AddAddressModal";
import AddressBox from "./AddressBox";
import AddressModal from "./AddressModal";

function ChooseAddress({ userAdresses }) {
  console.log(userAdresses);

  return (
    <Modal>
      {userAdresses?.length ? (
        userAdresses.map((address) => (
          <AddressBox key={address._id} address={address.address} />
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
        <AddressModal />
      </Modal.Page>
    </Modal>
  );
}

export default ChooseAddress;
