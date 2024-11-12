'use client'
import { useRouter } from "next/navigation";
import { GlobalLayout } from './GlobalLayout';
import { Title } from './components/Title';
import { BookCard } from './components/BookCard';
import { useListBookProviders } from './providers/useBookProviders';
const sugestion = [
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
];

function App() {
  const router = useRouter();
  const { books, highestRatedBook } = useListBookProviders();

  return (
    <GlobalLayout>
      <Title>Bonne Lecture</Title>
      <p className="text-left text-custom-dark font-elegant ml-10 mb-10 max-w-md">
        Découvrez notre sélection de livres captivants, explorez de nouveaux genres,
        et laissez-vous inspirer par des histoires inoubliables. Que vous soyez passionné de fiction, 
        de biographies, ou de science, il y a un livre pour chaque lecteur ici.
      </p>
      <h3 className='text-custom-dark font-elegant ml-10 text-3xl '>Nos Recommandations :</h3>
      <div className="flex flex-wrap gap-8 ml-10 mt-8">
        {/* Right side: Highest-rated book */}
        {highestRatedBook && (
          <div className="absolute w-full sm:w-1/2 xl:w-1/4 right-20 top-16 bg-red-200">
            <h2 className="text-custom-dark font-elegant text-4xl mb-4">Le Mieux Noté</h2>
            <BookCard
              coverImage={highestRatedBook.coverImage || "/images/livres/harry2.jpg"}
              title={highestRatedBook.title}
              author={`${highestRatedBook.author.firstName} ${highestRatedBook.author.lastName}`}
              rating={highestRatedBook.averageRating}
              date={highestRatedBook.publishedYear}
              hauteur="h-[70vh]"
              largeur="w-full"
              onClick={() => router.push('/books')}
            />
          </div>
        )}

        {/* Left side: Other books */}
        <div className="w-full sm:w-1/2 lg:w-3/5 xl:w-3/4 flex flex-wrap gap-8">
          {sugestion.map((book, index) => (
            <BookCard
              key={index}
              coverImage={book.coverImage}
              title={book.title}
              author={book.author}
              rating={book.rating}
              date={book.date}
              hauteur="h-48"
              largeur="w-32"
              onClick={() => router.push('/books')}
            />
          ))}
        </div>
      </div>
    </GlobalLayout>
  );
}

export default App;
