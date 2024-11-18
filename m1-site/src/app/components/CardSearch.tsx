import React from 'react';
import Image from 'next/image';
import '../App.css';

interface BookCardProps {
  coverImage: string;
  title: string;
  line1: string;
  line2: number;
  rating: number;
  isBook: boolean;
  hasBooks?: boolean; 
  isAdmin?: boolean; 
  onClick?: () => void;
}

export const Card: React.FC<BookCardProps> = ({
  coverImage,
  title,
  line1,
  line2,
  rating,
  isBook,
  hasBooks = false, 
  isAdmin = false, 
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

  const getOverlayStyle = () => {
    if (isAdmin) {
      if (!isBook && hasBooks) {
        return {
          bgColor: 'bg-orange-500 bg-opacity-50 p-1',
          text: 'Supprimer les livres en premier',
        };
      } else {
        return { bgColor: 'bg-red-500 bg-opacity-50', text: 'Cliquez pour supprimer' };
      }
    }
    return null;
  };

  const overlay = getOverlayStyle();

  return (
    <div
      className="bg-white w-56 h-96 rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer flex flex-col mt-4 mb-4 relative"
      onClick={onClick}
      role="button"
      aria-label={`Voir plus d'infos sur ${title}`}
    >

      {overlay && (
        <div
          className={`absolute inset-0 ${overlay.bgColor} flex items-center justify-center z-10`}
        >
          <span className="text-white font-bold text-lg text-center">{overlay.text}</span>
        </div>
      )}

      <div className="p-4 flex-1 text-custom-dark z-0">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{line1}</p>
        <p className="text-sm text-gray-500">{line2}</p>
        <div className="flex mt-2">{renderStars()}</div>
      </div>

      <div className="relative w-full h-full bg-custom-light">
        <Image
          src={coverImage}
          alt={`Couverture de ${title}`}
          layout="fill"
          objectFit={isBook ? 'scale-down' : 'cover'}
          className={isBook ? 'p-2' : ''}
        />
      </div>
    </div>
  );
};
