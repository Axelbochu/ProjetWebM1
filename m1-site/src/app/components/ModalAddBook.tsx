import { useState } from "react";

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('yearPublished', date);
    formData.append('price', price);
    if (image) {
      formData.append('file', image); // Appending the image file
    }

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload book');
      }

      const data = await response.json();
      console.log('Book created successfully', data);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block mb-2">Année de parution :&nbsp;</label>
              <input
                type="text"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-2">Prix :&nbsp;</label>
              <input
                type="text"
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
