import React from 'react';
import '../App.css'; 
import Image from 'next/image';

interface BookCardProps {
  coverImage: string;
  title: string;
  author: string;
  rating: number;
  date: number;
  hauteur: string;
  largeur: string;
  onClick?: () => void;
}

export const BookCard: React.FC<BookCardProps> = ({ coverImage, title, author, rating, date, hauteur, largeur, onClick }) => {
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
      className={`${hauteur} ${largeur} cursor-pointer relative group`}
      onClick={onClick}
      role="button"
      aria-label={`Voir plus d'infos sur ${title}`}
    >
      {/* Face avant */}
      <div className="w-full h-full shadow-lg-custom">
        <Image
          src={coverImage}
          alt={`Couverture de ${title}`}
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />
      </div>

      {/* Informations sur la face arrière, affichées au hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-custom-dark text-white p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-sm font-bold mb-2 line-clamp-4">{title}</h3>
        <p className="text-sm mb-1 line-clamp-2">{author}</p>
        <p className="text-sm mb-1">{date}</p>
        <div className="flex mb-2">{renderStars()}</div>
      </div>
    </div>
  );
};
