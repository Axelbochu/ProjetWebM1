'use client';

import { useEffect, useState,useMemo  } from "react";
import { GlobalLayout } from "../../GlobalLayout";
import { useParams } from "next/navigation";
import { ButtonAdmin } from "../../components/BoutonAdmin";
import { useListBookProviders } from '../../providers/useBookProviders';
import { useAdviceProviders } from "../../providers/useAdviceProvides";
import Image from "next/image";
import { AddAdvice } from "../../components/AddAdvice";
import { BookDesc } from "../../components/BookDesc";
import { AdviceCard } from "../../components/AdviceCard";
import { AdviceModel } from "../../models/AdvicesModel";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


function BookDetails() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [, setLocalAdvices] = useState<AdviceModel[]>([]); // Typé comme Advice
  const { addAdvice } = useAdviceProviders();
  const { id } = useParams();
  const { book, loadBookById } = useListBookProviders();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc"); // État pour le tri
  
  // Charger les détails du livre
  useEffect(() => {
    if (typeof id === "string" && id !== book?.id) {
      loadBookById(id);
    }
  }, [id, book?.id, loadBookById]);

  // Calcul de la note moyenne
  useEffect(() => {
    if (Array.isArray(book?.advices) && book.advices.length > 0) {
      const totalStars = book.advices.reduce((sum, advice) => sum + advice.stars, 0);
      const average = totalStars / book.advices.length;
      setAverageRating(parseFloat(average.toFixed(1)));
    } else {
      setAverageRating(0);
    }
  }, [book?.advices]);
  
   // Trier les avis par date
   const sortedAdvices = useMemo(() => {
    if (!Array.isArray(book?.advices)) return [];
    const sorted = [...book.advices].sort((a, b) => {
      const dateA = new Date(a.creationDate).getTime();
      const dateB = new Date(b.creationDate).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    return sorted;
  }, [book?.advices, sortOrder]);

  // Ouvrir/fermer le Drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Ajouter un nouvel avis
  const handleAddAdvice = async (newAdvice: { comment: string; stars: number }) => {
    window.location.reload();
    if (!book?.id) {
      console.error("ID du livre manquant");
      return;
    }

    const adviceWithBookId: AdviceModel = {
    
      stars: newAdvice.stars,
      comment: newAdvice.comment,
      creationDate: new Date().toISOString(),
      bookId: book.id,
    };

    try {
      const addedAdvice = await addAdvice(adviceWithBookId);
      console.log("Avis ajouté : ", addedAdvice);
      setLocalAdvices((prevAdvices) => [...prevAdvices, addedAdvice]); // Mettre à jour les avis locaux
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'avis :", error);
    }
  };

  return (
    <GlobalLayout>
      <div className="flex flex-col items-start gap-8">
        {/* Détails du livre */}
        <div className="w-full">
          <BookDesc
            coverImage={book?.photoPath ? book.photoPath : "/images/livres/fermer-livre-couverture-bleue_1101-92-removebg-preview.png"}
            book_name={book ? `${book.title},  ${book.publishedYear}` : `nom du livre`}
            price={book ? Number(book.price) : 0}
            author_name={book ? `${book.author.firstName} ${book.author.lastName}` : `nom de l'auteur`}
            author_id={String(book?.author.id)}
            rating={averageRating}
            hauteur={"h-full"}
            largeur={"w-full"}
          />
        </div>

        <button onClick={toggleDrawer} className="bg-custom-light py-2 px-4 rounded">
          Voir les avis
        </button>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <div className="w-80 p-4">
            <IconButton onClick={toggleDrawer} className="absolute top-2 right-2">
              <CloseIcon />
            </IconButton>

            <h2 className="text-xl font-bold mb-4">Avis des lecteurs</h2>

            {/* Bouton pour trier */}
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="mb-4 bg-custom-light py-2 px-4 rounded"
            >
              Trier par date ({sortOrder === "asc" ? "Croissant" : "Décroissant"})
            </button>

            {/* Afficher les avis triés */}
            {sortedAdvices.length > 0 ? (
              sortedAdvices.map((advice) => (
                <AdviceCard key={advice.id} advice={advice} />
              ))
            ) : (
              <p>Aucun Avis trouvé pour ce Livre.</p>
            )}

            {/* Ajout d'un nouvel avis */}
            <AddAdvice onSubmit={handleAddAdvice} />
          </div>
        </Drawer>
      </div>
    
      <ButtonAdmin onClick={() => setIsAdmin(!isAdmin)} className={isAdmin ? "bg-red-400" : "bg-custom-light"} aria-label="Authors">
        <Image src="/images/icon/icons8-paramètres-24.png" alt="Avatar" width={24} height={24} />
      </ButtonAdmin>
    </GlobalLayout>
  );
}

export default BookDetails;
