import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { BookDetailsModel } from "../models/BookDetailsModel";
import { BookModel } from "../models/BookModel";

export const useListBookProviders = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortType, setSortType] = useState<'alphabetical' | 'rating' | 'default'>('default');
  const [book, setBook] = useState<BookDetailsModel | null>(null);

  const loadBooks = (query = "") => {
    const url = query
      ? `http://localhost:3001/books/searchBook/${encodeURIComponent(query)}`
      : "http://localhost:3001/books";

    axios.get<BookModel[]>(url)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  const deleteBook = (id: string) => {
    const url = `http://localhost:3001/books/${encodeURIComponent(id)}`;

    axios.delete(url)
      .then(() => {
        loadBooks(searchQuery);
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  }

  const loadBookById = (id: string) => {
    const url = `http://localhost:3001/books/${encodeURIComponent(id)}`;

    axios
      .get<BookDetailsModel>(url)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching author by ID:", error);
      });
  };

  const createBook = async (formData: FormData) => {
    try {
      const response = await axios.post('http://localhost:3001/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        loadBooks(searchQuery); // Recharge les livres après la création
        return response.data;
      } else {
        throw new Error('Failed to create book');
      }
    } catch (error) {
      console.error('Error creating book:', error);
      throw error;
    }
  };

  useEffect(() => {
    loadBooks(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (sortType === 'alphabetical') {
      setBooks((prevBooks) => [...prevBooks].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sortType === 'rating') {
      setBooks((prevBooks) => [...prevBooks].sort((a, b) => b.averageRating - a.averageRating));
    } else {
      loadBooks(searchQuery);
    }
  }, [sortType, searchQuery]);

  const highestRatedBook = useMemo(() => {
    return books.reduce((topBook, currentBook) =>
      (topBook && topBook.averageRating >= currentBook.averageRating ? topBook : currentBook),
      null as BookModel | null
    );
  }, [books]);

  return {
    books,
    book,
    setSearchQuery,
    setSortType,
    loadBookById,
    highestRatedBook,
    deleteBook,
    createBook,
  };
};
