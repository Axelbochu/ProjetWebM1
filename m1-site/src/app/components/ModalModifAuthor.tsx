import { useState } from "react";
import { useListAuthorProviders } from '../providers/useAuthorsProviders'; // Importez le provider d'auteurs

interface ModalProps {
  setmodalModifAuthorIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

export const ModalModifAuthor: React.FC<ModalProps> = ({ setmodalModifAuthorIsOpen, id }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [biography, setBiography] = useState('');

  const { updateAuthor } = useListAuthorProviders(); // Utilisez le provider d'auteurs

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const authorData = {
      firstName: name,
      lastName: surname,
      biography: biography,
    };

    console.log("Payload:", authorData);

    try {
      console.log("Modification en cours...");
      const data = await updateAuthor(authorData, id); // Modifiez votre fonction pour accepter un JSON
      console.log('Auteur modifié avec succès', data);
    } catch (error) {
      console.error('Erreur lors de la modification de l\'auteur:', error);
    }
    setmodalModifAuthorIsOpen(false); // Fermez le modal après la modification
    window.location.reload(); // Rechargez la page pour voir les changements (optionnel)
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-20 z-0"
        onClick={() => setmodalModifAuthorIsOpen(false)}
      />
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-72 bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="mb-4">
            <h5 className="text-lg font-semibold text-gray-800">Modification d'un auteur</h5>
          </div>
          <div className="mb-6">
            Modifier les informations de l'auteur
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Nom :&nbsp;</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="surname" className="block mb-2">Prénom :&nbsp;</label>
              <input
                type="text"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="biography" className="block mb-2">Biographie :&nbsp;</label>
              <input
                type="text"
                id="biography"
                value={biography}
                onChange={(e) => setBiography(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-around">
              <button
                type="submit"
                className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-sky-500/50 hover:translate-y-[-5px] transition-all duration-200"
              >
                Envoyer
              </button>
              <button
                type="button"
                className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-none hover:bg-gray-200 transition-all duration-200"
                onClick={() => setmodalModifAuthorIsOpen(false)}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};