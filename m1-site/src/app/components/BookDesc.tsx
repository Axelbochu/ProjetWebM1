import React from 'react';
import { useRouter } from 'next/navigation'; // Importation du hook useRouter
import Image from 'next/image';

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
        <div className="p-3 max-h-60 overflow-auto">
          <p
            className="font-elegant cursor-pointer hover:underline text-2xl"
            onClick={handleAuthorClick} // Ajout de l'événement de clic
          >
            {author_name}
          </p>
          <p className="font-elegant mt-6">La République Galactique est en
              pleine ébullition. La taxation
              des routes commerciales reliant
              les systèmes éloignés provoque
              la discorde.

              Pour régler la question, la
              cupide Fédération du commerce
              et ses redoutables vaisseaux de
              guerre imposent un blocus à la
              petite planète Naboo.

              Face à ce dangereux engrenage,
              alors que le Congrès de la
              République s'enlise dans des
              débats sans fin, le Chancelier
              Suprême charge en secret deux
              Chevaliers Jedi, gardiens de la
              paix et de la justice dans la
              galaxie, de résoudre le conflit....
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
