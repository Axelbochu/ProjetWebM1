'use client';

import { GlobalLayout } from "../GlobalLayout";
import { Title } from '../components/Title';
import { Card } from '../components/CardSearch';
import { SearchBar } from '../components/searchBar';
import { useListBookProviders } from '../providers/useBookProviders'; // Import the custom hook
import { SortDropdown } from '../components/SortDropdown';
import { useRouter } from "next/navigation";
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
            coverImage={book.coverImage || "/images/livres/harry2.jpg"} 
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
