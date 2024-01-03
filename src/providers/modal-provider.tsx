import React, { createContext, useState } from "react";

const ModalContext = createContext({
  modalOpen: false,
  modalContent: <></>,
  setModalOpen: (value: boolean) => {},
  setModalContent: (value: React.ReactElement) => {},
});

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }: any): React.ReactNode => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState(<></>);

  return (
    <ModalContext.Provider
      value={{ modalOpen, modalContent, setModalOpen, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
