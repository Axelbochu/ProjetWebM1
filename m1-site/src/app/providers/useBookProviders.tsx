import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { BookModel } from "../models/BookModel";

export const useListBookProviders = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortType, setSortType] = useState<'alphabetical' | 'rating' | 'default'>('default');

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
    setSearchQuery,
    setSortType,
    highestRatedBook,  
  };
};
