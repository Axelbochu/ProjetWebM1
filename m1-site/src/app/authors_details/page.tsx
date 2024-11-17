'use client';

import { useState } from "react"; // Importation du hook useState
import { GlobalLayout } from "../GlobalLayout";
import { useRouter } from "next/navigation"; // Initialisation du router
import { AuthorDesc } from "../components/AuthorDesc";
import { ButtonAdmin } from "../components/BoutonAdmin";
import { BookCard } from "../components/BookCard";
import { AddBookCard } from "../components/AddBookCard";
import Image from "next/image";
import { ModalDelete } from "../components/ModalDelete";
import { ModalAddBook } from "../components/ModalAddBook";

const books = [
    {
      id: 1,
      coverImage: '/images/livres/harry2.jpg',
      title: 'Harry Potter et la chambre des secrets ',
      author: 'J.K Rowlings',
      date: 1998,
      rating: 4,
    },
    {
      id: 2,
      coverImage: '/images/livres/harry2.jpg',
      title: 'Titre du Livre 2',
      author: 'Auteur 2',
      date: 2000,
      rating: 5,
    },
    {
      id: 3,
      coverImage: '/images/livres/harry2.jpg',
      title: 'Harry Potter et la chambre des secrets ',
      author: 'J.K Rowlings',
      date: 1998,
      rating: 4,
    },
    {
      id: 4,
      coverImage: '/images/livres/harry2.jpg',
      title: 'Harry Potter et la chambre des secrets ',
      author: 'J.K Rowlings',
      date: 1998,
      rating: 4,
    },
    {
      id: 5,
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        id: 6,
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        id: 7,
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        id: 8,
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        id: 9,
        coverImage: '/images/livres/harry2.jpg',
        title: 'Harry Potter et la chambre des secrets ',
        author: 'J.K Rowlings',
        date: 1998,
        rating: 4,
      },
      {
        id: 10,
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
    const [booksList, setBooks] = useState(books);
    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
    const [selectedBookName, setSelectedBookName] = useState('');
    const [modalAddBookIsOpen, setModalAddBookIsOpen] = useState(false);
  
    // Fonction pour gérer le clic sur le bouton
    const handleAdminButtonClick = () => {
      setIsAdmin(!isAdmin); // Inverse l'état de isAdmin (true/false)
      router.push('/authors_details'); // Naviguer vers la page après le clic
    };

    const handleDelBook = (id: number, bookName: string) => {
      if (!isAdmin) {
        router.push('/books')
      }
      else {
        setSelectedBookName(bookName);
        setModalDeleteIsOpen(true);

      }
    }

    const deleteBook = (id: number) => {
      const updatedBooks = booksList.filter(booksList => booksList.id !== id);
      setBooks(updatedBooks);
      console.log(booksList)
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
          {booksList.map((book, index) => (
            <BookCard
              key={index}
              coverImage={book.coverImage}
              title={book.title}
              author={book.author}
              rating={book.rating}
              date={book.date}
              hauteur={"h-48"}
              largeur={"w-32"}
              isAdmin={isAdmin}
              onClick={() => handleDelBook(book.id, book.title)}
             
            />
          ))}
  
          {/* Le composant AddBookCard n'apparaît que si isAdmin est true */}
          {/* {isAdmin && (
            <AddBookCard
              hauteur={"h-48"}
              largeur={"w-32"}
              onClick={() => router.push('/authors_details')}
            />
          )} */}

          {isAdmin && (
            <AddBookCard
              hauteur={"h-48"}
              largeur={"w-32"}
              onClick={() => setModalAddBookIsOpen(true)}
            />
          )}
        </div>
           

    {modalDeleteIsOpen ? <ModalDelete setModalDeleteIsOpen={setModalDeleteIsOpen} bookName={selectedBookName}/> : <></>}
    {modalAddBookIsOpen ? <ModalAddBook setModalAddBookIsOpen={setModalAddBookIsOpen} /> : <></>}

  
        <ButtonAdmin onClick={handleAdminButtonClick} className={getButtonStyle()} aria-label="Authors">
          <Image src="/images/icon/icons8-avatar-241.png" alt="Avatar" width={24} height={24} />
        </ButtonAdmin>
      </GlobalLayout>
    );
  }
  
  export default AuthorsDetails;