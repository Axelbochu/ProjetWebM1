import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importation du hook useRouter
import React from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs"; // Import Breadcrumbs
import Link from "next/link"; // Import Link for navigation
import Typography from "@mui/material/Typography"; // For the current item

interface Book_data {
  coverImage: string;
  book_name: string;
  price: number;
  rating: number;
  author_name: string;
  author_id: string;
  hauteur: string;
  largeur: string;
}

export const BookDesc: React.FC<Book_data> = ({ coverImage, book_name, price, rating, author_name, author_id, hauteur, largeur }) => {
  const router = useRouter(); // Initialisation du hook pour naviguer

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const handleAuthorClick = () => {
    router.push(`/authors_details/${author_id}`); // Redirection au clic
  };

  return (
    <div className={`flex ${hauteur} ${largeur}`}> {/* Conteneur principal en flex */}
      {/* Section gauche pour les détails du livre */}
      <div className="flex flex-col w-2/3 p-4 space-y-4">
      <div className="p-3 -mt-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/" passHref>
              <Typography color="inherit" >Accueil</Typography>
            </Link>
            <Link href="/books" passHref>
              <Typography color="inherit" >Livres</Typography>
            </Link>
            <Typography color="text.primary">{book_name || "Détails du livre"}</Typography>
          </Breadcrumbs>
        </div>
        {/* Titre du livre */}
        <div className="p-3">
          <h1 className="font-elegant text-5xl text-custom-dark">{book_name}</h1>
        </div>
        {/* Prix et notation */}
        <div className="p-3 flex items-center space-x-4 space-x-20">
          <p className="font-elegant text-4xl text-custom-dark">Prix : {price} €</p>
          <p className="flex text-4xl">{renderStars()}</p>
        </div>
        {/* Auteur avec redirection */}
        <div className="p-3 max-h-65 overflow-auto">
          <p
            className="font-elegant cursor-pointer hover:underline text-2xl"
            onClick={handleAuthorClick} // Ajout de l'événement de clic
          >
            {author_name}
          </p>
          <p className="font-elegant mt-6">
            📢 Mise à jour de la bibliothèque
            <br />
            Actuellement, l'équipe travaille activement sur l'implémentation d'une nouvelle fonctionnalité : les <strong>résumés de livres</strong> ! 🖋️📚
            <br />
            Cette fonctionnalité permettra de :
            <br />
            - Consulter une présentation concise pour chaque ouvrage disponible.
            <br />
            - Faciliter vos choix de lecture en obtenant un aperçu rapide des contenus.
            <br />
            - Rendre l'expérience utilisateur encore plus enrichissante et intuitive.
          </p>

        </div>
      </div>

      {/* Section de droite avec l'image de couverture */}
      <div className="w-1/3 relative">
        <div className="relative w-full h-[500px] max-h-screen"> {/* Conteneur dynamique */}
          <Image
            src={coverImage}
            alt={`Couverture de ${book_name}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};
