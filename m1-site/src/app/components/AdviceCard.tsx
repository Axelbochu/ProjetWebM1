import React from "react";

// Définir le type de l'objet `advice`
interface Advice {
  id: string; // ou number si l'ID est numérique
  creationDate: string;
  comment: string;
  stars: number;
}

export const AdviceCard = ({ advice }: { advice: Advice }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full mb-4">
      <p className="text-sm text-gray-600">{advice.creationDate}</p>
      <p className="text-lg font-semibold mt-2">{advice.comment}</p>
      <div className="mt-2">
        {"★".repeat(advice.stars)}
        {"☆".repeat(5 - advice.stars)}
      </div>
    </div>
  );
};
