"use client";
import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type TModalContext = {
  name: string;
  close: any;
  open: any;
  setIsShowSuccessModal: any;
  isShowSuccessModal: boolean;
};

const ModalContext = createContext({} as TModalContext);

function Modal({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const close = () => setName("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const open = setName;

  return (
    <ModalContext.Provider
      value={{ name, close, open, setIsShowSuccessModal, isShowSuccessModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  name,
  onSetId,
}: {
  children: React.ReactNode;
  name: string;
  onSetId?: any;
}) {
  const { open } = useContext(ModalContext);
  return cloneElement(children as any, {
    onClick: () => {
      open(name);
      if (onSetId) {
        onSetId(name);
      }
    },
  });
}

function Page({
  children,
  name: windowName,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { close, name } = useContext(ModalContext);

  useEffect(() => {
    const clickHandler = (e: any) => {
      if (e.target.id === "modal") {
        close();
      }
    };

    window.addEventListener("click", clickHandler);
    return () => window.removeEventListener("click", clickHandler);
  }, []);

  if (name !== windowName) return null;
  return (
    <>
      <div
        id="modal"
        className="bg-black/50 fixed inset-0  flex items-center justify-center  z-50"
      >
        <div>{cloneElement(children as any, { onClose: close })}</div>
      </div>
    </>
  );
}

Modal.Open = Open;
Modal.Page = Page;

export default Modal;
