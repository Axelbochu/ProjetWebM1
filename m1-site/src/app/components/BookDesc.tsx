import React from 'react';
import '../App.css'; // Assurez-vous que le fichier CSS est bien importé
import Image from 'next/image';

interface Book_data {
  coverImage: string;
  book_name: string;
  price : number;
  rating: number;
  biographie: string;
  hauteur: string;
  largeur: string;
}

export const BookDesc: React.FC<Book_data> = ({ coverImage, book_name, price, rating, biographie, hauteur, largeur }) => {

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
        <div className={`flex ${hauteur} ${largeur}`}> {/* Conteneur principal en flex */}
            
            {/* Section gauche pour le nom et la biographie */}
            <div className="flex flex-col w-2/3 p-4 space-y-4">
                
                {/* Nom de l'auteur */}
                <div className="p-2">
                    <h1 className="font-elegant text-5xl text-custom-dark">{book_name}</h1>
                </div>
                {/* Prix du livre */}
                <div className="p-2 flex items-center space-x-4 space-x-20">
                    <p className="font-elegant text-4xl text-custom-dark">Prix : {price}€</p>
                    <p className="flex text-4xl">{renderStars()}</p>
                </div>

                {/* Biographie avec taille de police plus grande */}
                <div className="p-2 max-h-60 overflow-auto">
                    <p className="text-lg font-elegant">{biographie}</p> {/* Agrandissement de la police ici */}
                </div>
            </div>

            {/* Section de droite avec l'image de l'auteur */}
            <div className="w-1/3 relative">
                <Image
                    src={coverImage}
                    alt={`Photo de ${book_name}`}
                    layout="fill"
                    objectFit="cover"
                    className="shadow-lg rounded-xl"
                />
            </div>
        </div>
    );
};
