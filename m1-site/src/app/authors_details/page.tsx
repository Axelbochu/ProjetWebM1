'use client';

import { useState } from "react"; // Importation du hook useState
import { GlobalLayout } from "../GlobalLayout";
import { useRouter } from "next/navigation"; // Initialisation du router
import { AuthorDesc } from "../components/Author_desc";
import { ButtonAdmin } from "../components/BoutonAdmin";
import Image from "next/image";

function AuthorsDetails() { // Composant avec une majuscule pour respecter les conventions React
    const [isAdmin, setIsAdmin] = useState(false); // Déclare une variable d'état pour le bouton
    const router = useRouter(); // Initialisation du router

    // Fonction pour gérer le clic sur le bouton
    const handleAdminButtonClick = () => {
        setIsAdmin(!isAdmin); // Inverse l'état de isAdmin (true/false)
        router.push('/authors_details'); // Naviguer vers la page après le clic
    };

    // Fonction pour appliquer un style en fonction de l'état de isAdmin
    const getButtonStyle = () => {
        return isAdmin ? "bg-red-400" : "bg-custom-light"; // Applique un style différent si isAdmin est true
    };

    return (
        <GlobalLayout>
            <AuthorDesc
                coverImage={'/images/livres/harry2.jpg'}
                author_name={"nom de l'auteur"}
                biographie={"née quelque part dans une époque random"}
                hauteur={"h-full"}
                largeur={"w-full"}
            />
            
            {/* Bouton Admin avec style conditionnel et gestion de l'état */}
            <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
                <Image src="/images/icon/icons8-avatar-241.png" alt="Avatar" width={24} height={24} />
            </ButtonAdmin>
        </GlobalLayout>
    );
}

export default AuthorsDetails; // Assurez-vous d'exporter avec la même majuscule
