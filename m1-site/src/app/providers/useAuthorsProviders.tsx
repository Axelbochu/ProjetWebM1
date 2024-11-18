import { useState, useEffect } from "react";
import axios from "axios";
import { AuthorModel } from "../models/AuthorsModel";

export const useListAuthorProviders = () => {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [author, setAuthor] = useState<AuthorModel | null>(null);

  // Fonction pour charger plusieurs auteurs
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

  //fonction pour charger un auteur par son ID
  const loadAuthorById = (id: string) => {
    const url = `http://localhost:3001/Authors/${encodeURIComponent(id)}`;

    axios
      .get<AuthorModel>(url)
      .then((response) => {
        setAuthor(response.data); // Met à jour l'état d'un seul auteur
      })
      .catch((error) => {
        console.error("Error fetching author by ID:", error);
      });
  };
  const createAuthor = async (formData: FormData) => {
    try {
      const response = await axios.post('http://localhost:3001/authors', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
       
        return response.data;
      } else {
        throw new Error('Failed to create authors');
      }
    } catch (error) {
      console.error('Error creating authors:', error);
      throw error;
    }
  };
  // Effet pour charger les auteurs quand la requête change
  useEffect(() => {
    loadAuthors(searchQuery);
  }, [searchQuery]);

  return {
    authors,
    author, // État pour un seul auteur
    setSearchQuery, // Fonction pour mettre à jour la requête
    loadAuthorById, // Fonction pour charger un auteur par ID
    createAuthor
  };
};
