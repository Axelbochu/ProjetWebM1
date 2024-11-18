import { useState, useEffect } from "react";
import { useListBookProviders } from '../providers/useBookProviders'; // Importez le provider de livres


interface ModalProps {
  setModalAddAuthorIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
}

export const ModalAddAuthor: React.FC<ModalProps> = ({ setModalAddAuthorIsOpen, onClick }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [biography, setBiography] = useState('');
  const [image, setImage] = useState<File | null>(null);


  const { createBook } = useListBookProviders(); // Utilisez le provider de livres

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('biography', biography);
    if (image) {
      formData.append('picture', image); // Appending the image file
    }

    try {
      console.log("try")
      const data = await createBook(formData);
      console.log('Book created successfully', data);
      setModalAddAuthorIsOpen(false); // Fermez le modal après la création
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 z-0" onClick={() => setModalAddAuthorIsOpen(false)} />
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-72 bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="mb-4">
            <h5 className="text-lg font-semibold text-gray-800">Ajout d'un auteur</h5>
          </div>
          <div className="mb-6">
            Ajouter un nouvel auteur
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
            
            
            <div className="mb-4">
              <input type="file" onChange={handleImageChange} className="w-full p-2 border border-gray-300 rounded-md" />
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
                onClick={() => setModalAddAuthorIsOpen(false)}
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
