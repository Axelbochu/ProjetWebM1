import React from 'react';
import Image from 'next/image';
import '../App.css'
interface BookCardProps {
  coverImage: string;
  title: string;
  line1: string;
  line2: number;
  rating: number;
  isBook: boolean;
  onClick?: () => void;
}

export const Card: React.FC<BookCardProps> = ({
  coverImage,
  title, // titre du livre ou le nom de l'auteur en fonction de la page 
  line1,
  line2,
  rating, 
  isBook, // on verifie si c'est un livre ou un auteur
  onClick,
}) => {
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

  return (
    <div
      className="bg-white w-56 h-96 rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer  flex flex-col mt-4 "
      onClick={onClick}
      role="button"
      aria-label={`Voir plus d'infos sur ${title}`}
    >
      <div className="p-4 flex-1 text-custom-dark">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{line1}</p>
        <p className="text-sm text-gray-500">{line2}</p>
        <div className="flex mt-2">{renderStars()}</div>
      </div>

      {/* Image en bas */}
      <div className="relative w-full h-full bg-custom-light ">
        <Image
          src={coverImage}
          alt={`Couverture de ${title}`}
          layout="fill"        // Utilisation de "fill" pour prendre toute la place disponible
          objectFit={isBook ? 'scale-down' : 'cover'}    // Pour couvrir la zone de l'image
          className={isBook ? 'p-2 ' : ''} // Ajoute un rayon aux coins du bas
        />
        
      </div>
    </div>
  );
};
