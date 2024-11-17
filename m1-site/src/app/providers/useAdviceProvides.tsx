import axios from "axios";
import { AdviceModel } from "../models/AdvicesModel";

export const useAdviceProviders = () => {

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

  return {addAdvice };
};
