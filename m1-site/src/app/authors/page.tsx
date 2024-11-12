'use client';
import { Card } from '../components/CardSearch';
import { Title} from '.././components/Title';
import { GlobalLayout } from "../GlobalLayout";
import {SearchBar} from '../components/searchBar';
import {useListAuthorProviders} from '../providers/useAuthorsProviders'
import { useEffect } from "react"
import { AuthorModel } from '../models/AuthorsModel';

function authors(){
  const books = [
    {
      coverImage: '/images/auteur/jk.jpg',
      title: "J.K. Rowling",
      line2: 5,
      rating: 4, 
    },
  ];

  const { authors } = useListAuthorProviders();


  const handleSearch = (query: string) => {
    console.log("Recherche en cours :", query);
    // Implémentez votre logique de recherche ici
  };

    return(
        
        <GlobalLayout>
          <Title>Page auteurs</Title>
          <SearchBar onSearch={handleSearch} />
          <div className="min-h-screen bg-gray-100 ml-10 mr-10 flex flex-wrap  justify-center gap-6 ">
          {authors.map((author : AuthorModel) => (
          <Card
            key={author.id}
            coverImage={author.authorImage}
            title={author.firstName + author.lastName}
            line1={"Nombre de livres :"}
            line2={author.numberBook || 0}
            rating={author.rating || 0}
            isBook={false}
            onClick={() => console.log(`Détails de ${author.lastName}`)}
          />
        ))}
      </div>

        </GlobalLayout>
        

    ) 
}
 export default authors;