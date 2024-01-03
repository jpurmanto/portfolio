import { RefObject, useEffect } from "react";

export const useClickOverlay = <T extends HTMLElement>(
  ref: RefObject<T>,
  setModalOpen: (value: boolean) => void
): void => {
  const handleOverlayClick = (e: MouseEvent): void => {
    const { current } = ref;

    if (current === e.target) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [ref]);
};
