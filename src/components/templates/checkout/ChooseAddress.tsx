"use client";
import Modal from "@/components/modules/main/Modal";
import { FaTruck } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import AddressModal from "./AddressModal";
import { useState } from "react";
import AddAddressModal from "./AddAddressModal";

function ChooseAddress() {
  const [hasAddress, setHasAddress] = useState(false);
  return (
    <Modal>
      {hasAddress ? (
        <div className="border border-yellow-500 p-4 md:cursor-pointer rounded-lg flex items-center gap-x-4 mt-5">
          <FaTruck className="text-zinc-700 text-lg" />
          <div className="space-y-3 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xs md:text-base text-yellow-500">
                ارسال به آدرس انتخاب شده
              </h3>
              <Modal.Open name="address">
                <span className="text-xs md:text-sm flex items-center gap-x-1 text-yellow-500">
                  تغییر آدرس
                  <HiChevronLeft />
                </span>
              </Modal.Open>
            </div>
            <h4 className="text-zinc-600 text-sm">
              استان البرز ، کرج ، ساختمان شماره 135
            </h4>
          </div>
        </div>
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
