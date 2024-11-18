import axios from "axios";
import { AdviceModel } from "../models/AdvicesModel";
import { BookDetailsModel } from "../models/BookDetailsModel";

export const useAdviceProviders = (book: BookDetailsModel | null, setLocalAdvices: React.Dispatch<React.SetStateAction<AdviceModel[]>>) => {

  const addAdvice = async (newAdvice: Omit<AdviceModel, "id">): Promise<AdviceModel> => {
    try {
      const response = await axios.post<AdviceModel>(
        "http://localhost:3001/Advices",
        newAdvice
      );
      return response.data; // Retourne l'avis ajouté
    } catch (error) {
      console.error("Error adding advice:", error);
      throw error;
    }
  };

  const handleAddAdvice = async (newAdvice: { comment: string; stars: number }) => {
    window.location.reload();
    if (!book?.id) {
      console.error("ID du livre manquant");
      return;
    }

    const adviceWithBookId: AdviceModel = {
    
      stars: newAdvice.stars,
      comment: newAdvice.comment,
      creationDate: new Date().toISOString(),
      bookId: book.id,
    };

    try {
      const addedAdvice = await addAdvice(adviceWithBookId);
      console.log("Avis ajouté : ", addedAdvice);
      setLocalAdvices((prevAdvices) => [...prevAdvices, addedAdvice]); // Mettre à jour les avis locaux
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'avis :", error);
    }
  };
  return {addAdvice,handleAddAdvice };
};
