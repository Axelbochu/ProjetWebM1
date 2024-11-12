import { useState, useEffect } from "react";
import axios from "axios";
import { AuthorModel, CreateAuthorModel } from "../models/AuthorsModel";

export const useListAuthorProviders = () => {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);

  // Function to load authors from the API
  const loadAuthors = () => {
    axios.get<AuthorModel[]>('http://localhost:3001/Authors')
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  useEffect(() => {
    loadAuthors(); // Automatically load authors on mount
  }, []);

  return {
    authors,
    loadAuthors,
     // Export the onCreateAuthor function for use elsewhere
  };
};
