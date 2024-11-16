'use client';

import { useEffect, useState } from "react"; // Importation du hook useState
import { GlobalLayout } from "../../GlobalLayout";
import { useParams } from "next/navigation"; // Initialisation du router
import { ButtonAdmin } from "../../components/BoutonAdmin";
import { useListBookProviders } from '../../providers/useBookProviders';
import Image from "next/image";
import { BookDesc } from "../../components/BookDesc";
import { AdviceCard } from "../../components/AdviceCard"; // Importer le nouveau composant

function BookDetails() {
  const [isAdmin, setIsAdmin] = useState(false); // Déclare une variable d'état pour le bouton
  const [averageRating, setAverageRating] = useState(0); // État pour la moyenne des étoiles (type number)
  const { id } = useParams();
  const { book, loadBookById } = useListBookProviders(); // Données de l'auteur

  useEffect(() => {
    if (typeof id === "string" && id !== book?.id) {
      loadBookById(id); // Charger l'auteur par ID
    }
  }, [id, book?.id, loadBookById]);

  // Calculer la moyenne des étoiles lorsque book.advices change
  useEffect(() => {
    if (Array.isArray(book?.advices) && book.advices.length > 0) {
      const totalStars = book.advices.reduce((sum, advice) => sum + advice.stars, 0);
      const average = totalStars / book.advices.length;
      setAverageRating(parseFloat(average.toFixed(1))); // Convertir en number après arrondi
    } else {
      setAverageRating(0); // Pas d'avis, donc pas de moyenne
    }
  }, [book?.advices]);

  // Fonction pour gérer le clic sur le bouton
  const handleAdminButtonClick = () => {
    setIsAdmin(!isAdmin); // Inverse l'état de isAdmin (true/false)
  };

  // Fonction pour appliquer un style en fonction de l'état de isAdmin
  const getButtonStyle = () => {
    return isAdmin ? "bg-red-400" : "bg-custom-light"; // Applique un style différent si isAdmin est true
  };

  return (
    <GlobalLayout>
      <div className="flex flex-col items-start gap-8"> {/* Conteneur parent flex en colonne */}
        {/* Détails du livre */}
        <div className="w-full">
          <BookDesc
            coverImage={book?.photoPath ? book.photoPath : "/images/livres/harry2.jpg"}
            book_name={book ? `${book.title},  ${book.publishedYear}` : `nom du livre`}
            price={book ? Number(book.price) : 0}
            author_name={book ? `${book.author.firstName} ${book.author.lastName}` : `nom de l'auteur`}
            author_id={String(book?.author.id)}
            rating={averageRating}
            hauteur={"h-full"}
            largeur={"w-full"}
          />
        </div>

        {/* Avis sous les détails du livre */}
        <div className="w-full mt-6 p-4"> {/* Section des avis */}
          <h2 className="text-xl font-bold mb-4">Avis des lecteurs</h2>
          {Array.isArray(book?.advices) && book?.advices.length > 0 ? (
            book.advices.map((advice) => (
              <AdviceCard key={advice.id} advice={advice} /> // Utilisation du nouveau composant
            ))
          ) : (
            <p>Aucun Avis trouvé pour ce Livre.</p>
          )}
        </div>
      </div>

      <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
        <Image src="/images/icon/icons8-paramètres-24.png" alt="Avatar" width={24} height={24} />
      </ButtonAdmin>
    </GlobalLayout>
  );
}

export default BookDetails;
