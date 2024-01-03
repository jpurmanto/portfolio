import { useCallback, useLayoutEffect, useRef } from "react";

export const useScrollLock = () => {
  const originalOverflow = useRef<string>("");
  const originalPaddingRight = useRef<string>("");

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "var(--scrollbar-compensation)";
    document.body.dataset.scrollLock = "true";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = originalOverflow.current;
    document.body.style.paddingRight = originalPaddingRight.current;
    delete document.body.dataset.scrollLock;
  }, []);

  useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
