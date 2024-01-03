import ModalContext from "@/providers/modal-provider";
import { useCallback, useContext } from "react";

export const useModal = () => {
  const { setModalOpen, setModalContent } = useContext(ModalContext);

  const showModal = useCallback(
    (content: React.ReactElement) => {
      setModalContent(content);
      setModalOpen(true);
    },
    [setModalOpen, setModalContent]
  );

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalContent(<></>);
  }, [setModalOpen, setModalContent]);

  return { showModal, closeModal };
};
