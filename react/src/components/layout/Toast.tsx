import React, { useState } from "react";

interface ToastProps {
  className?: string;
  children?: React.ReactNode;
  isActive: boolean;
  duration: number;
  animation: string;
  onClose: () => void;
  onOpen: () => void;
}

const Toast = ({ className = "", children, isActive, duration, animation, onClose, onOpen }: ToastProps) => {
  const [active, setActive] = useState(isActive);
  const [durationValue, setDurationValue] = useState(duration);
  const [animationValue, setAnimationValue] = useState(animation);

  const handleOpen = () => {
    setActive(true);
    onOpen();
    setTimeout(() => {
      setActive(false);
      onClose();
    }, durationValue);
  };

  const handleClose = () => {
    setActive(false);
    onClose();
  };


  return (
    <div
      data-component="toast"
      className={`${className}`}>
      <button onClick={handleClose}>Open Toast</button>
      {active && (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Toast;
