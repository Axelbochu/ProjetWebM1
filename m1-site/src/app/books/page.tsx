'use client';

import { GlobalLayout } from "../GlobalLayout";
import { Title } from '../components/Title';
import { Card } from '../components/CardSearch';
import {SearchBar} from '../components/searchBar';
import { useEffect } from "react"

function Books() {

  const books = [
    {
      coverImage: '/images/livres/harry2.jpg',
      title: "Harry Potter à l'école des sorciers",
      line1: 'J.K. Rowling',
      line2: 1997,
      rating: 4, 
      
    },
  ];


  const handleSearch = (query: string) => {
    console.log("Recherche en cours :", query);
    // Implémentez votre logique de recherche ici
  };

  return (
    <GlobalLayout>
        <Title>Books page</Title>
        <div>
        <SearchBar onSearch={handleSearch} />
        
        
        </div>
        <div className="min-h-screen bg-gray-100 ml-10 mr-10 flex flex-wrap  justify-center gap-6">
            {books.map((book, index) => (
            <Card
                key={index}
                coverImage={book.coverImage}
                title={book.title}
                line1={book.line1}
                line2={book.line2}
                rating={book.rating} 
                isBook = {true}
                onClick={() => console.log(`Détails de ${book.title}`)}
            />
            ))}
        </div>
    </GlobalLayout>
  );
}

export default Books;
