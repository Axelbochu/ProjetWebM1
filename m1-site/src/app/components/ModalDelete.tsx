import React from "react";
import styles from "./Modal.module.css";
import { useRouter } from "next/navigation"; // Initialisation du router


interface ModalProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    bookName: string;
    onClick?: () => void;
  }

export const ModalDelete: React.FC<ModalProps> = ({ setModalIsOpen, bookName, onClick }) => {
// const Modal = ({ boolean: setModalIsOpen }) => {
  const router = useRouter(); // Initialisation du router
  return (
    <>
      <div className={styles.darkBG} onClick={() => setModalIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Suppression</h5>
          </div>
          <div className={styles.modalContent}>
            Etes-vous sûr de vouloir supprimer le livre <br></br>{bookName} ?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => router.push('/books')}>
                Supprimer
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setModalIsOpen(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default Modal;

