import React, { useState } from "react";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const Modal = ({ className = "", children, isOpen, onClose, onOpen }: ModalProps) => {
  const [open, setOpen] = useState(isOpen);

  const handleOpen = () => {
    setOpen(true);
    onOpen();
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div
      data-component="modal"
      className={`${className}`}>
      <button onClick={handleOpen}>Open Modal</button>
      {open && (
        <div>
          <div>{children}</div>
          <button onClick={handleClose}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
