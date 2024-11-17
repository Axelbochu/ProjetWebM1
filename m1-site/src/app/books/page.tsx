'use client';

import { useRouter } from "next/navigation";
import { GlobalLayout } from "../GlobalLayout";
import { Card } from '../components/CardSearch';
import { SortDropdown } from '../components/SortDropdown';
import { Title } from '../components/Title';
import { SearchBar } from '../components/searchBar';
import { useListBookProviders } from '../providers/useBookProviders'; // Import the custom hook
function Books() {
  const { books, setSearchQuery, setSortType } = useListBookProviders(); 
  const router = useRouter();


  return (
    <GlobalLayout>
      <Title>Page Livres</Title>
      <div>
        <SearchBar onSearch={setSearchQuery} />
        <SortDropdown onSortChange={setSortType} />
      </div>
      <div className="  ml-10 mr-10 flex flex-wrap justify-center gap-6">
      {books.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Aucun livre trouvé.</p>
        ) : (
          
        books.map((book) => (
        
          <Card
            key={book.id}
            coverImage={book.photoPath || "/images/livres/fermer-livre-couverture-bleue_1101-92-removebg-preview.png"} 
            title={book.title}
            line1={book.author.firstName + " " + book.author.lastName}
            line2={book.publishedYear || 0 }
            rating={book.averageRating || 0} 
            isBook={true}
            onClick={() => router.push('/books_details/'+book.id)}
          />
        ))
      )}
      </div>
    </GlobalLayout>
  );
}

export default Books;
