import { useState, useEffect } from "react";
import axios from "axios";
import { BookModel } from "../models/BookModel"; // Assuming BookModel is imported from the right path

export const useListBookProviders = () => {
  const [books, setBooks] = useState<BookModel[]>([]);

  // Function to load books from the API
  const loadBooks = () => {
    axios.get<BookModel[]>('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  // Automatically load books on mount
  useEffect(() => {
    loadBooks();
  }, []);

  return {
    books,
    loadBooks, // You can use this to manually refresh the list if needed
  };
};
