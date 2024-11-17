'use client';

import { useEffect, useState } from "react"; // Importation du hook useState
import { GlobalLayout } from "../../GlobalLayout";
import { useParams, useRouter } from "next/navigation"; // Initialisation du router
import { AuthorDesc } from "../../components/AuthorDesc";
import { ButtonAdmin } from "../../components/BoutonAdmin";
import { BookCard } from "../../components/BookCard";
import { AddBookCard } from "../../components/AddBookCard";
import { useListAuthorProviders } from '../../providers/useAuthorsProviders';
import { ModalDelete } from "../../components/ModalDelete";
import { ModalAddBook } from "../../components/ModalAddBook";
import Image from "next/image";

function AuthorsDetails() {
  const [isAdmin, setIsAdmin] = useState(false); // Déclare une variable d'état pour le bouton
  const router = useRouter(); // Initialisation du router
  const { id } = useParams();
  const { author, loadAuthorById } = useListAuthorProviders(); // Données de l'auteur
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [selectedBookName, setSelectedBookName] = useState('');
  const [modalAddBookIsOpen, setModalAddBookIsOpen] = useState(false);

  useEffect(() => {
    if (typeof id === "string" && id !== author?.id) {
      loadAuthorById(id); // Charger l'auteur par ID
    }
  }, [id, author?.id, loadAuthorById]);

  // Fonction pour gérer le clic sur le bouton Admin
  const handleAdminButtonClick = () => {
    setIsAdmin(!isAdmin); // Inverser l'état de isAdmin (true/false)
  };

  const handleDelBook = (id: number, bookName: string) => {
    if (!isAdmin) {
      router.push('/books')
    }
    else {
      setSelectedBookName(bookName);
      setModalDeleteIsOpen(true);
    }
  }

  // Fonction pour appliquer un style en fonction de l'état de isAdmin
  const getButtonStyle = () => {
    return isAdmin ? "bg-red-400" : "bg-custom-light"; // Appliquer un style différent si isAdmin est true
  };

  return (
    <GlobalLayout>
      <AuthorDesc
        coverImage={author?.authorImage ? author.authorImage : "/images/auteur/NicePng_user-png_730154.png"} // Image de l'auteur
        author_name={author ? `${author.firstName} ${author.lastName}` : "Nom de l'auteur"}
        biographie={author ? `${author.biography}` : "Biographie"}
        hauteur={"h-[70vh]"}
        largeur={"w-full"}
      />
      
      <div className="flex flex-wrap gap-8 ml-10 mt-10">
        {/* Affichage dynamique des livres de l'auteur */}
        {author?.books && author.books.length > 0 ? (author.books.map((book, index) => (
                <BookCard
                  key={index}
                  coverImage={book.coverImage || "/images/livres/fermer-livre-couverture-bleue_1101-92-removebg-preview.png"} // Image du livre, avec valeur par défaut
                  title={book.title}
                  author={`${book.author.firstName} ${book.author.lastName}`} // Nom complet de l'auteur
                  rating={book.averageRating} // Note moyenne du livre
                  date={book.publishedYear} // Année de publication
                  hauteur={"h-48"}
                  largeur={"w-32"}
                  isAdmin={isAdmin}
                  onClick={() => handleDelBook(Number(book.id), book.title)}
                />
              ))
          ) : (
              <p>Aucun livre trouvé pour cet auteur.</p>
          )}

        {/* Le composant AddBookCard n'apparaît que si isAdmin est true */}
        {isAdmin && (
            <AddBookCard
              hauteur={"h-48"}
              largeur={"w-32"}
              onClick={() => setModalAddBookIsOpen(true)}
            />
        )}
      </div>
      
      {modalDeleteIsOpen ? <ModalDelete setModalDeleteIsOpen={setModalDeleteIsOpen} bookName={selectedBookName}/> : <></>}
      {modalAddBookIsOpen ? <ModalAddBook setModalAddBookIsOpen={setModalAddBookIsOpen} /> : <></>}

      <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
        <Image src="/images/icon/icons8-paramètres-24.png" alt="Avatar" width={24} height={24} />
      </ButtonAdmin>
    </GlobalLayout>
  );
}

export default AuthorsDetails;
