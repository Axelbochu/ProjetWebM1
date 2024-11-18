'use client'
import { useRouter } from "next/navigation";
import { GlobalLayout } from './GlobalLayout';
import { BookCard } from './components/BookCard';
import { Title } from './components/Title';
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
    coverImage: '/images/livres/eragon2.jpg',
    title: "Eragon L'ainé",
    author: 'Christopher Paolini',
    date: 2000,
    rating: 5,
  },
  {
    coverImage: '/images/livres/hungergame.jpg',
    title: 'Hunger Games La Révolte',
    author: 'Suzanne Collins',
    date: 2010,
    rating: 4,
  },
  {
    coverImage: '/images/livres/got.jpg',
    title: 'The Game Of Thrones',
    author: 'George R. R. Martin ',
    date: 1996,
    rating: 5,
  },
];

function App() {
  const router = useRouter();
  const { highestRatedBook,topRatedBooksExcludingFirst } = useListBookProviders();

  return (
    <GlobalLayout>
      <Title>Bonne Lecture</Title>
      <p className="text-left text-custom-dark font-elegant ml-10 mb-10 max-w-md text-lg">
        Découvrez notre sélection de livres captivants, explorez de nouveaux genres,
        et laissez-vous inspirer par des histoires inoubliables. Que vous soyez passionné de fiction, 
        de biographies, ou de science, il y a un livre pour chaque lecteur ici.
      </p>
      
      <div className="flex flex-wrap gap-8 ml-10 ">
        {/* Right side: Highest-rated book */}
        {highestRatedBook && (
          <div className="absolute w-full sm:w-1/2 xl:w-1/4 right-20 top-16 ">
            <h2 className="text-custom-dark font-elegant text-4xl mb-4">Le Mieux Noté</h2>
            <BookCard
              coverImage={highestRatedBook.photoPath || "/images/livres/harry2.jpg"}
              title={highestRatedBook.title}
              author={`${highestRatedBook.author.firstName} ${highestRatedBook.author.lastName}`}
              rating={highestRatedBook.averageRating}
              date={highestRatedBook.publishedYear}
              hauteur="h-[70vh]"
              largeur="w-full"
              isAdmin={false}
              onClick={() => router.push(`/books_details/${highestRatedBook.id}`)} 
            />
          </div>
        )}

        {/* Left side: Other books */}
        <h3 className='text-custom-dark font-elegant  text-3xl mt-11'>Nos Recommandations :</h3>
        <div className="w-full sm:w-1/2 lg:w-3/5 xl:w-3/4 flex flex-wrap gap-8 ">
          {topRatedBooksExcludingFirst.map((book, index) => (
            <BookCard
              key={index}
              coverImage={book.photoPath || "/images/livres/fermer-livre-couverture-bleue_1101-92-removebg-preview.png"}
              title={book.title}
              author={`${book.author.firstName} ${book.author.lastName}`}
              rating={book.averageRating}
              date={book.publishedYear}
              hauteur="h-48"
              largeur="w-32"
              isAdmin={false}
              onClick={() => router.push(`/books_details/${book.id}`)}
            />
          ))}
        </div>
      </div>
    </GlobalLayout>
  );
}

export default App;
