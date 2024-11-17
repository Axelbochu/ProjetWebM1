import { useState } from "react";
import { Rating } from "@mui/material"; // Pour la notation par étoiles

// Définir les types pour les props
interface AddAdviceProps {
  onSubmit: (advice: { comment: string; stars: number }) => void;
}

export function AddAdvice({ onSubmit }: AddAdviceProps) {
  const [comment, setComment] = useState<string>(""); // État pour le commentaire
  const [stars, setStars] = useState<number>(0); // État pour la note

  // Fonction pour gérer la soumission
  const handleSubmit = () => {
    if (comment.trim() && stars > 0) {
      onSubmit({ comment, stars }); // Appeler la fonction onSubmit avec les données de l'avis
      setComment(""); // Réinitialiser le champ
      setStars(0); // Réinitialiser la note
    } else {
      alert("Veuillez ajouter un commentaire et une note.");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-lg font-bold">Ajouter un avis</h3>

      {/* Champ pour le commentaire */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Entrez votre commentaire"
        className="w-full p-2 border rounded"
        rows={4}
      ></textarea>

      {/* Système de notation */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Note :</span>
        <Rating
          name="stars"
          value={stars}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setStars(newValue); // Gérer uniquement les valeurs non nulles
            }
          }}
        />
      </div>

      {/* Bouton de soumission */}
      <button
        onClick={handleSubmit}
        className="bg-gray-100 py-2 px-4 rounded"
      >
        Soumettre
      </button>
    </div>
  );
}
