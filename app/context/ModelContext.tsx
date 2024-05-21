// context/ModalContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface ModalContextType {
  modalContent: { title: string; description: string; imageUrl: string } | null;
  openModal: (content: { title: string; description: string; imageUrl: string }) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<{ title: string; description: string; imageUrl: string } | null>(null);

  const openModal = (content: { title: string; description: string; imageUrl: string }) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
