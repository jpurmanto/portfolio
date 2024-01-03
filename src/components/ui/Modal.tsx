"use client";

import { useClickOverlay, useModal, useScrollLock } from "@/hooks";
import ModalContext from "@/providers/modal-provider";
import { useContext, useEffect, useRef } from "react";

export function Modal(): JSX.Element {
  const { modalOpen, modalContent } = useContext(ModalContext);
  const { closeModal } = useModal();
  const { lockScroll, unlockScroll } = useScrollLock();
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalOpen ? lockScroll() : unlockScroll();
  }, [modalOpen]);

  useClickOverlay(overlay, closeModal);

  useEffect(() => {
    const handleKeydown = ({ key }: KeyboardEvent) => {
      if (!modalOpen || key !== "Escape") return;
      closeModal();
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [overlay, modalOpen]);

  return (
    <>
      {modalOpen ? (
        <main
          ref={overlay}
          className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-black/80 px-4 py-5 z-50"
        >
          <section id="modal" className="flex flex-row-reverse overflow-hidden">
            <i
              className="ri-close-line text-2xl p-2 text-indigo-950 cursor-pointer hover:text-[var(--primary-color)] transition-colors ease-in-out duration-200 absolute -translate-x-3"
              onClick={closeModal}
            />

            <div className="w-full max-w-[777px] max-h-[80vh] rounded-xl rounded-e-md bg-white px-8 py-8 text-center md:px-[60px] overflow-y-auto">
              {modalContent}
            </div>
          </section>
        </main>
      ) : null}
    </>
  );
}
