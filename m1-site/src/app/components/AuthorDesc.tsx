import React from 'react';
import '../App.css'; // Assurez-vous que le fichier CSS est bien importé
import Image from 'next/image';
import { Author_data } from '../models/AuthorsModel';
import Breadcrumbs from "@mui/material/Breadcrumbs"; // Import Breadcrumbs
import Link from "next/link"; // Import Link for navigation
import Typography from "@mui/material/Typography"; // For the current item

export const AuthorDesc: React.FC<Author_data> = ({ coverImage, author_name, biographie, hauteur, largeur }) => {
    return (
        <div className={`flex ${hauteur} ${largeur}`}> {/* Conteneur principal en flex */}
            
            {/* Section gauche pour le nom et la biographie */}
            <div className="flex flex-col w-2/3 p-4 space-y-4">
            <div className="p-3 -mt-6">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link href="/" passHref>
                    <Typography color="inherit" component="a">Accueil</Typography>
                  </Link>
                  <Link href="/authors" passHref>
                    <Typography color="inherit" component="a">Auteurs</Typography>
                  </Link>
                  <Typography color="text.primary">{author_name || "Détails de l'auteur"}</Typography>
                </Breadcrumbs>
              </div>
                {/* Nom de l'auteur */}
                <div className="p-2">
                    <h1 className="font-elegant text-5xl text-custom-dark">{author_name}</h1>
                </div>

                {/* Biographie avec taille de police plus grande */}
                <div className="p-2 max-h-32 overflow-auto">
                    <p className="text-lg font-elegant">{biographie}</p> {/* Agrandissement de la police ici */}
                </div>
            </div>

      {/* Section de droite avec l'image de couverture */}
      <div className="w-1/3 relative">
        <div className="relative w-full h-[500px] max-h-screen"> {/* Conteneur dynamique */}
          <Image
            src={coverImage}
            alt={`Photo de ${author_name}`}
            layout="fill"
            objectFit="contain"
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
    );
};
