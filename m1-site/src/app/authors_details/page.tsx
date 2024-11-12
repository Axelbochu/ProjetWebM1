'use client';

import { useState } from "react"; // Importation du hook useState
import { GlobalLayout } from "../GlobalLayout";
import { useRouter } from "next/navigation"; // Initialisation du router
import { AuthorDesc } from "../components/AuthorDesc";
import { ButtonAdmin } from "../components/BoutonAdmin";
import { BookCard } from "../components/BookCard";
import { AddBookCard } from "../components/AddBookCard";
import Image from "next/image";

const books = [
    {
      coverImage: '/images/livres/harry2.jpg',
      title: 'Harry Potter et la chambre des secrets ',
      author: 'J.K Rowlings',
      date: 1998,
      rating: 4,
    },
    {
      coverImage: '/images/livres/harry2.jpg',
      title: 'Titre du Livre 2',
      author: 'Auteur 2',
      date: 2000,
      rating: 5,
    },
    {
      coverImage: '/images/livres/harry2.jpg',
      title: 'Harry Potter et la chambre des secrets ',
      author: 'J.K Rowlings',
      date: 1998,
      rating: 4,
    },
    {
      coverImage: '/images/livres/harry2.jpg',
      title: 'Harry Potter et la chambre des secrets ',
      author: 'J.K Rowlings',
      date: 1998,
      rating: 4,
    },
    {
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
    
  ];

  function AuthorsDetails() {
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
          author_name={"Nom de l'auteur"}
          biographie={"Née quelque part dans une époque random"}
          hauteur={"h-[70vh]"}
          largeur={"w-full"}
        />
        
        <div className="flex flex-wrap gap-8 ml-10 mt-10">
          {books.map((book, index) => (
            <BookCard
              key={index}
              coverImage={book.coverImage}
              title={book.title}
              author={book.author}
              rating={book.rating}
              date={book.date}
              hauteur={"h-48"}
              largeur={"w-32"}
              onClick={() => router.push('/books')}
            />
          ))}
  
          {/* Le composant AddBookCard n'apparaît que si isAdmin est true */}
          {isAdmin && (
            <AddBookCard
              hauteur={"h-48"}
              largeur={"w-32"}
              onClick={() => router.push('/authors_details')}
            />
          )}
        </div>
  
        <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
          <Image src="/images/icon/icons8-paramètres-24.png" alt="Avatar" width={24} height={24} />
        </ButtonAdmin>
      </GlobalLayout>
    );
  }
  
  export default AuthorsDetails;