import { useState, useEffect } from "react";
import { useListAuthorProviders } from '../providers/useAuthorsProviders';
import { AuthorModel } from '../models/AuthorsModel';

interface ModalProps {
  setModalAddBookIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
}

export const ModalAddBook: React.FC<ModalProps> = ({ setModalAddBookIsOpen, onClick }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchId, setSearchId] = useState('');
  const [suggestions, setSuggestions] = useState<AuthorModel[]>([]);

  const { authors, setSearchQuery } = useListAuthorProviders();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value.trim() === '') {
      setSuggestions([]); // Réinitialiser les suggestions si l'input est vide
    } else {
      setSearchQuery(value);
    }
  };

  const handleSuggestionClick = (suggestion: AuthorModel) => {
    setAuthor(`${suggestion.firstName} ${suggestion.lastName}`);
    setSearchValue(`${suggestion.firstName} ${suggestion.lastName}`);
    setSearchId(`${suggestion.id}`);
    setSuggestions([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageBase64 = '';

    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = async () => {
        imageBase64 = reader.result as string; // Convertir l'image en base64
        await sendBookData(imageBase64); // Appelez une autre fonction pour envoyer les données
      };
      reader.onerror = () => {
        console.error('Error reading the image file');
      };
      return; // Ne pas continuer avant que la lecture de l'image soit terminée
    } else {
      await sendBookData(imageBase64); // Si pas d'image, envoyez les autres données
    }
  };

  const sendBookData = async (imageBase64: string) => {
    const data = {
      title,
      authorId: searchId,
      yearPublished: parseInt(date),
      price: parseInt(price),
      picture: imageBase64, // Ajoutez l'image base64 ici
    };

    try {
      const response = await fetch('http://localhost:3001/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to upload book');
      }

      const result = await response.json();
      console.log('Book created successfully', result);
      window.location.reload(); // Recharger la page après la soumission réussie
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  useEffect(() => {
    if (authors && searchValue.trim() !== '') {
      setSuggestions(authors.slice(0, 3)); // Limiter à 3 suggestions
    }
  }, [authors]);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 z-0" onClick={() => setModalAddBookIsOpen(false)} />
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-72 bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="mb-4">
            <h5 className="text-lg font-semibold text-gray-800">Ajout d'un livre</h5>
          </div>
          <div className="mb-6">
            Ajouter un nouveau livre
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block mb-2">Titre :&nbsp;</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block mb-2">Auteur :&nbsp;</label>
              <input
                type="text"
                id="author"
                value={searchValue}
                onChange={handleSearchChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <ul>
                {suggestions.map((author: AuthorModel) => (
                  <li
                    key={author.id}
                    onClick={() => handleSuggestionClick(author)}
                    className="cursor-pointer p-2 border-b border-gray-200"
                  >
                    {author.firstName} {author.lastName}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block mb-2">Année de parution :&nbsp;</label>
              <input
                type="string"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-2">Prix :&nbsp;</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                onClick={() => setModalAddBookIsOpen(false)}
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
