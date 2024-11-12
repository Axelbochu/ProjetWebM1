import { useState, useEffect } from "react";
import axios from "axios";
import { AuthorModel } from "../models/AuthorsModel";

export const useListAuthorProviders = () => {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to load authors from the API
  const loadAuthors = (query = "") => {
    const url = query
      ? `http://localhost:3001/Authors/getById/${encodeURIComponent(query)}`
      : "http://localhost:3001/Authors";

    axios
      .get<AuthorModel[]>(url)
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
      });
  };

  // Effect to load authors initially or when searchQuery changes
  useEffect(() => {
    loadAuthors(searchQuery);
  }, [searchQuery]);

  return {
    authors,
    setSearchQuery, // Use this to update the search query for authors
  };
};
