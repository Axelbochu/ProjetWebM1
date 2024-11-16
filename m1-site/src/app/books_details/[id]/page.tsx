'use client';

import { useState } from "react"; // Importation du hook useState
import { GlobalLayout } from "../../GlobalLayout";
import { useRouter } from "next/navigation"; // Initialisation du router
import { ButtonAdmin } from "../../components/BoutonAdmin";
import Image from "next/image";
import { BookDesc } from "../../components/BookDesc";

  function BookDetails() {
    const [isAdmin, setIsAdmin] = useState(false); // Déclare une variable d'état pour le bouton
    const router = useRouter(); // Initialisation du router
  
    // Fonction pour gérer le clic sur le bouton
    const handleAdminButtonClick = () => {
      setIsAdmin(!isAdmin); // Inverse l'état de isAdmin (true/false)
      router.push('/books_details/id'); // Naviguer vers la page après le clic
    };
  
    // Fonction pour appliquer un style en fonction de l'état de isAdmin
    const getButtonStyle = () => {
      return isAdmin ? "bg-red-400" : "bg-custom-light"; // Applique un style différent si isAdmin est true
    };
  
    return (
      <GlobalLayout>
        <BookDesc
          coverImage={'/images/livres/harry2.jpg'}
          book_name={"Harry pot de fleur"}
          biographie={"Il y a bien longtemps, dans une galaxie lointaine, très lointaine…Des millions d’années avant notre ère…Un puissant ordre Jedi a protégé la galaxie…Mais après la chute du Maître Jedi, le Chancelier Palpatine a utilisé son pouvoir pour détruire l’Ordre Jedi…Maintenant, la galaxie est divisée en deux camps : les Républicains et les Séparatistes…La République est menacée par l’Armée Séparatiste dirigée par le Comte Dooku…"}
          price={19.12}
          rating={4}
          hauteur={"h-full"}
          largeur={"w-full"}
        />
  
        <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
          <Image src="/images/icon/icons8-paramètres-24.png" alt="Avatar" width={24} height={24} />
        </ButtonAdmin>
      </GlobalLayout>
    );
  }
  
  export default BookDetails;