"use client";

import { useClickOverlay, useScrollLock } from "@/hooks";
import ModalContext from "@/providers/modal-provider";
import { useContext, useEffect, useRef } from "react";

export default function Modal(): JSX.Element {
  const { modalOpen, setModalOpen, modalContent, setModalContent } =
    useContext(ModalContext);
  const { lockScroll, unlockScroll } = useScrollLock();
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalOpen ? lockScroll() : unlockScroll();
  }, [modalOpen]);

  useClickOverlay(overlay, setModalOpen);

  useEffect(() => {
    const handleKeydown = ({ key }: KeyboardEvent) => {
      if (!modalOpen || key !== "Escape") return;
      setModalOpen(false);
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [overlay, modalOpen]);

  const handleClose = () => {
    setModalOpen(false);
    setModalContent(<></>);
  };

  return (
    <>
      {modalOpen ? (
        <main
          ref={overlay}
          className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-black/80 px-4 py-5 z-50"
        >
          <section className="flex flex-row-reverse z-[999]">
            <i
              className="ri-close-line text-2xl p-2 text-indigo-950 cursor-pointer hover:text-[var(--primary-color)] transition-colors ease-in-out duration-200 absolute -translate-x-3"
              onClick={handleClose}
            />

            <div className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]">
              {modalContent}
            </div>
          </section>
        </main>
      ) : null}
    </>
  );
}
