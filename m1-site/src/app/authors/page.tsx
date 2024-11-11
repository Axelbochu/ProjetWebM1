'use client';
import { Card } from '../components/CardSearch';
import { Title} from '.././components/Title';
import { GlobalLayout } from "../GlobalLayout";
function authors(){
  const books = [
    {
      coverImage: '/images/auteur/jk.jpg',
      title: "J.K. Rowling",
      line2: 5,
      rating: 4, 
    },
  ];
    return(
        
        <GlobalLayout>
          <Title>Page auteurs</Title>
          <div className="min-h-screen bg-gray-100 flex flex-wrap gap-6 justify-center p-6">
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