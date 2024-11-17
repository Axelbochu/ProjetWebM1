'use client';
import { useRouter } from "next/navigation";
import { Title } from '.././components/Title';
import { GlobalLayout } from "../GlobalLayout";
import { Card } from '../components/CardSearch';
import { SearchBar } from '../components/searchBar';
import { useListAuthorProviders } from '../providers/useAuthorsProviders';

import { AuthorModel } from '../models/AuthorsModel';

function Authors(){
 
  const router = useRouter();
  const { authors , setSearchQuery } = useListAuthorProviders();

    return(
        
        <GlobalLayout>
          <Title>Page auteurs</Title>
          
          <SearchBar onSearch={setSearchQuery} />
          <div className="min-h-screen ml-10 mr-10 flex flex-wrap  justify-center gap-6 ">
          {authors.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Aucun auteur trouvé.</p>
        ) : (
          
          authors.map((author : AuthorModel) => (
          <Card
            key={author.id}
            coverImage={author.photoPath  || '/images/auteur/NicePng_user-png_730154.png'}
            title={author.firstName + ' ' + author.lastName}
            line1={"Nombre de livres :"}
            line2={author.bookCount || 0}
            rating={author.averageRating || 0}
            isBook={false}
            onClick={() => router.push('/authors_details/'+author.id)}
          />
          )
        ))}
      </div>

        </GlobalLayout>
        

    ) 
}
 export default Authors;