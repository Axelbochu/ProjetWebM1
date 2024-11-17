import { useState }  from "react";
import styles from "./Modal.module.css";
import { useRouter } from "next/navigation"; // Initialisation du router


interface ModalProps {
    setModalAddBookIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClick?: () => void;
}

export const ModalAddBook: React.FC<ModalProps> = ({ setModalAddBookIsOpen, onClick }) => {   

        const [title, setTitle] = useState('');
        const [author, setAuthor] = useState('');
        const [date, setDate] = useState('');
        const [email, setEmail] = useState('');
      
        const handleSubmit = () => {
          alert(`${title} ${author} ${date} ${email}`);
        };
      
    return (
        <>
            <div className={styles.darkBG} onClick={() => setModalAddBookIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Ajout d'un livre</h5>
                    </div>
                    <div className={styles.modalContent}>
                        Ajouter un nouveau livre
                    </div>
                    
                    <form>
                    <div className={styles.modalContent}>                    
                        <label htmlFor="title">Titre :&nbsp;</label>
                        <input type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />

                        <br></br>

                        <label htmlFor="author">Auteur :&nbsp;</label>
                        <input type="text"
                            id="author"
                            value={title}
                            onChange={(e) => setAuthor(e.target.value)} />

                            <br></br>

                        <label htmlFor="date">Année de parution :&nbsp;</label>
                        <input type="text"
                            id="date"
                            value={title}
                            onChange={(e) => setDate(e.target.value)} />

                            <br></br> <label htmlFor="email">Email :&nbsp;</label>
                        <input type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                            <br></br>

                            <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                        <button className={`${styles.deleteBtn} bg-sky-500`} onClick={handleSubmit}>
                                Envoyer
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setModalAddBookIsOpen(false)}
                            >
                                Annuler
                            </button>
                        </div>
                    </div>


                            
                            <button onClick={handleSubmit}>Envoyer</button>
                        
                    </form>
                    
                    

                    
                </div>
            </div>
        </>
    );
};
