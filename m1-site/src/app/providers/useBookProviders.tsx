import { useState, useEffect } from "react";
import axios from "axios";
import { BookModel } from "../models/BookModel"; // Assuming BookModel is imported from the right path

export const useListBookProviders = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to load books from the API
  const loadBooks = (query = "") => {
    const url = query
      ? `http://localhost:3001/books/searchBook/${encodeURIComponent(query)}`
      : "http://localhost:3001/books";

    axios
      .get<BookModel[]>(url)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  // Effect to load all books initially or when searchQuery changes
  useEffect(() => {
    loadBooks(searchQuery);
  }, [searchQuery]);

  return {
    books,
    setSearchQuery, // Call this to update the search query
  };
};
