import React from "react";
import { useRouter } from "next/navigation"; // Initialisation du router

interface ModalProps {
  setModalDeleteIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bookName: string;
  onClick?: () => void;
}

export const ModalDelete: React.FC<ModalProps> = ({ setModalDeleteIsOpen, bookName, onClick }) => {
  const router = useRouter(); // Initialisation du router
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 z-0" onClick={() => setModalDeleteIsOpen(false)} />
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-72 bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="mb-4">
            <h5 className="text-lg font-semibold text-gray-800">Suppression</h5>
          </div>
          <div className="mb-6">
            Etes-vous sûr de vouloir supprimer le livre <br />{bookName} ?
          </div>
          <div className="flex justify-around">
            <button
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-red-600/50 hover:translate-y-[-5px] transition-all duration-200"
              onClick={() => router.push('/books')}
            >
              Supprimer
            </button>
            <button
              className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-none hover:bg-gray-200 transition-all duration-200"
              onClick={() => setModalDeleteIsOpen(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
