'use client';

import { useEffect, useState } from "react"; // Importation du hook useState
import { GlobalLayout } from "../../GlobalLayout";
import { useParams, useRouter } from "next/navigation"; // Initialisation du router
import { AuthorDesc } from "../../components/AuthorDesc";
import { ButtonAdmin } from "../../components/BoutonAdmin";
import { BookCard } from "../../components/BookCard";
import { AddBookCard } from "../../components/AddBookCard";
import { useListAuthorProviders } from '../../providers/useAuthorsProviders';
import Image from "next/image";

function AuthorsDetails() {
  const [isAdmin, setIsAdmin] = useState(false); // Déclare une variable d'état pour le bouton
  const router = useRouter(); // Initialisation du router
  const { id } = useParams();
  const { author, loadAuthorById } = useListAuthorProviders(); // Données de l'auteur

  useEffect(() => {
    if (typeof id === "string" && id !== author?.id) {
      loadAuthorById(id); // Charger l'auteur par ID
    }
  }, [id, author?.id, loadAuthorById]);

  // Fonction pour gérer le clic sur le bouton Admin
  const handleAdminButtonClick = () => {
    setIsAdmin(!isAdmin); // Inverser l'état de isAdmin (true/false)
  };

  // Fonction pour appliquer un style en fonction de l'état de isAdmin
  const getButtonStyle = () => {
    return isAdmin ? "bg-red-400" : "bg-custom-light"; // Appliquer un style différent si isAdmin est true
  };

  console.log(author?.authorImage);

  return (
    <GlobalLayout>
      <AuthorDesc
        coverImage={author?.authorImage ? author.authorImage : "/images/livres/harry2.jpg"} // Image de l'auteur
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
                  coverImage={book.coverImage || "/images/livres/harry2.jpg"} // Image du livre, avec valeur par défaut
                  title={book.title}
                  author={`${book.author.firstName} ${book.author.lastName}`} // Nom complet de l'auteur
                  rating={book.averageRating} // Note moyenne du livre
                  date={book.publishedYear} // Année de publication
                  hauteur={"h-48"}
                  largeur={"w-32"}
                  onClick={() => router.push(`/books_details/${book.id}`)} // Navigation vers les détails du livre
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
            onClick={() => router.push('/authors_details')}
          />
        )}
      </div>

      <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
        <Image src="/images/icon/icons8-paramètres-24.png" alt="Avatar" width={24} height={24} />
      </ButtonAdmin>
    </GlobalLayout>
  );
}

export default AuthorsDetails;
