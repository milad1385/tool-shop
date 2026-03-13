"use client";
import Modal from "@/components/modules/main/Modal";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import AddressModal from "./AddressModal";
import Orders from "./Orders";
import Title from "./Title";
import ChooseTime from "./ChooseTime";

function MainBox() {
  return (
    <div className="col-span-12 md:col-span-9 bg-white rounded-3xl p-5 md:p-8">
      <Title title="آدرس و زمان ارسال" />

      <Modal>
        <Modal.Open name="address">
          <div className="border border-yellow-500 p-4 md:cursor-pointer rounded-lg flex items-center gap-x-4 mt-5">
            <FaTruck className="text-zinc-700 text-lg" />
            <div className="space-y-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xs md:text-base text-yellow-500">
                  ارسال به آدرس انتخاب شده
                </h3>
                <span className="text-xs md:text-sm flex items-center gap-x-1 text-yellow-500">
                  تغییر آدرس
                  <HiChevronLeft />
                </span>
              </div>
              <h4 className="text-zinc-600 text-sm">
                استان البرز ، کرج ، ساختمان شماره 135
              </h4>
            </div>
          </div>
        </Modal.Open>
        <Modal.Page name="address">
          <AddressModal />
        </Modal.Page>
      </Modal>

      <Orders />

      <ChooseTime/>
    </div>
  );
}

export default MainBox;
