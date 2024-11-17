import React from 'react';
import '../App.css'; // Assurez-vous que le fichier CSS est bien importé

interface BookCardProps {
  hauteur: string;
  largeur: string;
  onClick?: () => void;
}

export const AddBookCard: React.FC<BookCardProps> = ({ hauteur, largeur, onClick }) => {
  return (
    <div
      className={`${hauteur} ${largeur} cursor-pointer relative group border-2 border-gray-300 flex justify-center items-center`}
      onClick={onClick}
      role="button"
      aria-label="Ajouter un livre"
    >
      {/* Contenu du rectangle avec symbole "+" */}
      <div className="w-full h-full flex justify-center items-center border-2 border-gray-300">
        <span className="text-4xl text-gray-500">+</span>
      </div>
    </div>
  );
};
