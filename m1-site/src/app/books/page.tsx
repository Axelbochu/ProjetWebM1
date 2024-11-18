'use client';

import { useRouter } from "next/navigation";
import { GlobalLayout } from "../GlobalLayout";
import { Card } from '../components/CardSearch';
import { SortDropdown } from '../components/SortDropdown';
import { Title } from '../components/Title';
import { SearchBar } from '../components/searchBar';
import { useListBookProviders } from '../providers/useBookProviders'; // Import the custom hook
import { ButtonAdmin } from "../components/BoutonAdmin";
import Image from "next/image";
import { useEffect, useState } from "react"; // Importation du hook useState
import { ModalDelete } from "../components/ModalDelete";
import { ModalAddBook } from "../components/ModalAddBook";
import { AddBookCard } from "../components/AddBookCard";

function Books() {
  const { books, setSearchQuery, setSortType } = useListBookProviders(); 
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false); // Déclare une variable d'état pour le bouton
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [modalAddBookIsOpen, setModalAddBookIsOpen] = useState(false);

  const handleAdminButtonClick = () => {
    setIsAdmin(!isAdmin); // Inverser l'état de isAdmin (true/false)
  };

  const getButtonStyle = () => {
    return isAdmin ? "bg-red-400" : "bg-custom-light"; // Appliquer un style différent si isAdmin est true
  };

  const handleDelBook = (id: string) => {
    if (!isAdmin) {
      router.push(`/books_details/${id}`)
    }
    else {
      setSelectedId(id);
      setModalDeleteIsOpen(true);
    }
  }


  return (
    <GlobalLayout>
      <Title>Page Livres</Title>
      <div>
        <SearchBar onSearch={setSearchQuery} />
        <SortDropdown onSortChange={setSortType} />
      </div>
      <div className="  ml-10 mr-10 flex flex-wrap justify-center gap-6">
      {books.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Aucun livre trouvé.</p>
        ) : (
          
        books.map((book) => (
        
          <Card
            key={book.id}
            coverImage={book.photoPath || "/images/livres/fermer-livre-couverture-bleue_1101-92-removebg-preview.png"} 
            title={book.title}
            line1={book.author.firstName + " " + book.author.lastName}
            line2={book.publishedYear || 0 }
            rating={book.averageRating || 0} 
            isBook={true}
            // onClick={() => router.push('/books_details/'+book.id)}
            onClick={() => handleDelBook(book.id)}
          />
        ))
      )}
      {isAdmin && (
            <AddBookCard
              hauteur={"h-48"}
              largeur={"w-32"}
              onClick={() => setModalAddBookIsOpen(true)}
            />
        )}
      </div>

      {modalDeleteIsOpen ? <ModalDelete setModalDeleteIsOpen={setModalDeleteIsOpen} id={selectedId}/> : <></>}
      {modalAddBookIsOpen ? <ModalAddBook setModalAddBookIsOpen={setModalAddBookIsOpen} /> : <></>}

      <ButtonAdmin onClick={() => setModalAddBookIsOpen(true)} className={`${getButtonStyle()} mb-12`} aria-label="Authors">
        <Image src="/images/icon/icons8-ajouter-50.png" alt="" width={24} height={24} />
      </ButtonAdmin>

      <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
        <Image src="/images/icon/icons8-paramètres-24.png" alt="Avatar" width={24} height={24} />
      </ButtonAdmin>
    </GlobalLayout>
  );
}

export default Books;
