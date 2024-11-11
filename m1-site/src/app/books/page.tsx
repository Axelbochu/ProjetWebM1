'use client';

import { GlobalLayout } from "../GlobalLayout";
import { Title } from '../components/Title';
import { Card } from '../components/CardSearch';

function Books() {
  const books = [
    {
      coverImage: '/images/livres/harry2.jpg',
      title: "Harry Potter à l'école des sorciers",
      line1: 'J.K. Rowling',
      line2: 1997,
      rating: 4, 
      
    },
    {
      coverImage: '/images/livres/harry2.jpg',
      title: "Harry Potter et la chambre des secrets",
      line1: 'J.K. Rowling',
      line2: 1998,
      rating: 5,
    },
    {
      coverImage: '/images/livres/onepiece1.png',
      title: "Harry Potter et le prisonnier d'Azkaban",
      line1: 'J.K. Rowling',
      line2: 1999,
      rating: 3,
    },
  ];

  

  return (
    <GlobalLayout>
      <Title>Books page</Title>
      <div className="min-h-screen bg-gray-100 flex flex-wrap gap-6 justify-center p-6">
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
