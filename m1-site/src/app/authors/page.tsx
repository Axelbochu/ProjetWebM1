'use client';
import { Card } from '../components/CardSearch';
import { Title} from '.././components/Title';
import { GlobalLayout } from "../GlobalLayout";
import {SearchBar} from '../components/searchBar';
function authors(){
  const books = [
    {
      coverImage: '/images/auteur/jk.jpg',
      title: "J.K. Rowling",
      line2: 5,
      rating: 4, 
    },
  ];
  const handleSearch = (query: string) => {
    console.log("Recherche en cours :", query);
    // Implémentez votre logique de recherche ici
  };

    return(
        
        <GlobalLayout>
          <Title>Page auteurs</Title>
          <SearchBar onSearch={handleSearch} />
          <div className="min-h-screen bg-gray-100 ml-10 mr-10 flex flex-wrap  justify-center gap-6 ">
        {books.map((book, index) => (
          <Card
            key={index}
            coverImage={book.coverImage}
            title={book.title}
            line1={"Nombre de livres :"}
            line2={book.line2}
            rating={book.rating} 
            isBook = {false}
            onClick={() => console.log(`Détails de ${book.title}`)}
          />
        ))}
      </div>

        </GlobalLayout>
        

    ) 
}
 export default authors;