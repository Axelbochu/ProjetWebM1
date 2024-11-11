'use client';
import './App.css';
import { useRouter } from "next/navigation"
import { GlobalLayout } from './GlobalLayout';
import { Title} from './components/Title';
import {BookCard} from './components/BookCard'; 


const books = [
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

  const router = useRouter()

  return (
  <GlobalLayout>
    <Title>Bonne Lecture</Title>
    <p className=" text-left text-custom-dark font-elegant ml-10 mb-10  max-w-md ">
        Découvrez notre sélection de livres captivants, explorez de nouveaux genres,
        et laissez-vous inspirer par des histoires inoubliables. Que vous soyez passionné de fiction, 
        de biographies, ou de science, il y a un livre pour chaque lecteur ici.
    </p>
    <div className="flex flex-wrap gap-8 ml-10  ">
      {books.map((book, index) => (
        <BookCard
          key={index}
          coverImage={book.coverImage}
          title={book.title}
          author={book.author}
          rating={book.rating}
          date = {book.date}
          hauteur = {"h-48"}
          largeur = {"w-32"}
        
          onClick={() => router.push('/books')}
        />
      ))}
    </div>

  </GlobalLayout>
  

  )
}

export default App;
