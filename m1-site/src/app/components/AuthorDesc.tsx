import React from 'react';
import '../App.css'; // Assurez-vous que le fichier CSS est bien importé
import Image from 'next/image';

interface Author_data {
  coverImage: string;
  author_name: string;
  biographie: string;
  hauteur: string;
  largeur: string;
}

export const AuthorDesc: React.FC<Author_data> = ({ coverImage, author_name, biographie, hauteur, largeur }) => {
    return (
        <div className={`flex ${hauteur} ${largeur}`}> {/* Conteneur principal en flex */}
            
            {/* Section gauche pour le nom et la biographie */}
            <div className="flex flex-col w-2/3 p-4 space-y-4">
                
                {/* Nom de l'auteur */}
                <div className="p-2">
                    <h1 className="font-elegant text-5xl text-custom-dark">{author_name}</h1>
                </div>

                {/* Biographie avec taille de police plus grande */}
                <div className="p-2 max-h-32 overflow-auto">
                    <p className="text-lg">{biographie}</p> {/* Agrandissement de la police ici */}
                </div>
            </div>

            {/* Section de droite avec l'image de l'auteur */}
            <div className="w-1/3 relative">
                <Image
                    src={coverImage}
                    alt={`Photo de ${author_name}`}
                    layout="fill"
                    objectFit="cover"
                    className="shadow-lg rounded-xl"
                />
            </div>
        </div>
    );
};
