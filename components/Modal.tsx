// components/Modal.tsx
'use client';
import { FC } from 'react';
import { useModal } from '@/app/context/ModelContext';

const Modal: FC = () => {
  const { modalContent, closeModal } = useModal();

  if (!modalContent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto relative z-60">
        <img src={modalContent.imageUrl} alt="Section image" className="w-full h-auto rounded-lg mb-4" />
        <h3 className="font-semibold text-center text-xl mb-2">{modalContent.title}</h3>
        <p className="text-black">{modalContent.description}</p>
        <center><button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button></center>
      </div>
    </div>
  );
};

export default Modal;
