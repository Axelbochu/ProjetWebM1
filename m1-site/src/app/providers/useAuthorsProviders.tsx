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
  const deleteAuthor = (id: string) => {
    const url = `http://localhost:3001/authors/${encodeURIComponent(id)}`;

    axios.delete(url)

      .catch((error) => {
        console.error("Error deleting author:", error);
      });
  }
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
  
    const updateAuthor = async (authorData: { firstName: string; lastName: string; biography: string }, id: string) => {
      try {
        const response = await axios.patch(
          `http://localhost:3001/authors/${encodeURIComponent(id)}`, 
          authorData,  // Utilisation de l'objet JSON
          {
            headers: {
              'Content-Type': 'application/json',  // Définir l'en-tête approprié pour JSON
            },
          }
        );
    
        if (response.status === 200) {
          console.log('Auteur modifié avec succès', response.data);
          return response.data;
        } else {
          throw new Error('Failed to update authors');
        }
      } catch (error) {
        console.error('Erreur lors de la modification de l\'auteur:', error);
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
    loadAuthorById,
    deleteAuthor, // Fonction pour charger un auteur par ID
    createAuthor,
    updateAuthor
  };
};
