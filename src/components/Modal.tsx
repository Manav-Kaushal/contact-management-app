import React, { useState, useEffect } from "react";
import { classNames } from "../utils/helpers";
import { XMarkIcon } from "@heroicons/react/24/outline";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string | React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title = "",
}) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [isOpen]);

  const modalClasses = classNames(
    "fixed inset-0 flex items-center justify-center z-50",
    {
      "opacity-0": !isOpen,
      "opacity-100": isOpen,
    }
  );

  return (
    <>
      {modalOpen && (
        <div className={modalClasses}>
          <div className="fixed inset-0 bg-black opacity-30"></div>
          <div className="bg-white rounded shadow-lg z-50 w-96">
            {title && (
              <div className="text-left py-3 px-6 border-b border-gray-300 w-full flex items-center justify-between">
                <h5 className="font-semibold text-lg">{title}</h5>
                <XMarkIcon
                  className="w-5 h-5 cursor-pointer hover:text-red-500 transition-300"
                  onClick={onClose}
                />
              </div>
            )}
            <div className="p-6">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
