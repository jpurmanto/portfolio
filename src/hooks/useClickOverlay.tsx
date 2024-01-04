import { RefObject, useEffect } from "react";

export const useClickOverlay = <T extends HTMLElement>(
  ref: RefObject<T>,
  handleClose: () => void
): void => {
  const handleOverlayClick = (e: MouseEvent): void => {
    const { current } = ref;

    if (current !== e.target) return;
    handleClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [ref]);
};
