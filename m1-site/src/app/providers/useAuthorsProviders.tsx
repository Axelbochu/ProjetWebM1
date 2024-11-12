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

  // Function to create a new author following the `onCreate` pattern
  const onCreateAuthor = (input: Omit<CreateAuthorModel, 'id'>) => {
    axios.post('http://localhost:3001/authors', { author: input })
      .then(() => {
        loadAuthors(); // Refresh the author list after creation
      })
      .catch((error) => {
        console.error('Error adding author:', error);
      });
  };

  useEffect(() => {
    loadAuthors(); // Automatically load authors on mount
  }, []);

  return {
    authors,
    loadAuthors,
    onCreateAuthor, // Export the onCreateAuthor function for use elsewhere
  };
};
