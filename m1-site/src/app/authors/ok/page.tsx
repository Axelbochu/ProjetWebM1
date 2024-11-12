'use client';
import React, { useState } from "react";
import { useListAuthorProviders } from "../../providers/useAuthorsProviders";

const AddAuthorComponent: React.FC = () => {
  const { onCreateAuthor } = useListAuthorProviders();

  const [newAuthor, setNewAuthor] = useState({
    
    firstName: "New Author",
    lastName: "rowlings",
    photoPath: "/images/auteur/jk.jpg",
  });

  const handleAddAuthor = () => {
    onCreateAuthor(newAuthor); // Calls the onCreateAuthor function with the new author data
  };

  return (
    <div className="p-4">
      <button onClick={handleAddAuthor} className="bg-blue-500 text-white p-2 rounded">
        Ajouter un Auteur
      </button>
    </div>
  );
};

export default AddAuthorComponent;
