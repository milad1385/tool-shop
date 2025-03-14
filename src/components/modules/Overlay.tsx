import React from "react";

type TOverlay = {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuOverlay({ isOpen, onClose }: TOverlay) {
  return (
    <div
      onClick={() => onClose(false)}
      className={`fixed md:hidden inset-0 z-20 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } bg-black/30 transition-all`}
    ></div>
  );
}

export default MenuOverlay;
