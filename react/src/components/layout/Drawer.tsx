import React, { useState } from "react";

interface DrawerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  maxWidth?: string;
  from: "left" | "right" | "top" | "bottom";
  blurAreaBehind?: boolean;
  onClose: () => void;
  onOpen: () => void;
  className?: string;
}

const Drawer = ({ children, isOpen = false, maxWidth = "300px", from = "right", blurAreaBehind = true, onClose, onOpen, className = "" }: DrawerProps) => {
  // integrate all props in the drawer component

  const [open, setOpen] = useState(isOpen);
  const [maxWidthValue, setMaxWidthValue] = useState(maxWidth);
  const [fromValue, setFromValue] = useState(from);
  const [blurAreaBehindValue, setBlurAreaBehindValue] = useState(blurAreaBehind);

  const handleOpen = () => {
    setOpen(true);
    onOpen();
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <section
      data-component="drawer"
      className={`${className}`}>
      Drawer!!!
    </section>
  );
};

export default Drawer;
