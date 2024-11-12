import {  BookId } from '../database/entities/book.entity';
import { AdviceModel } from './advice.model';

// DTO ou présentation des données d'un avis
export class AdvicePresenter {
  id: string;
  bookId: BookId;
  creationDate: Date;
  comment?: string;
  stars: number;

  private constructor(advice: AdvicePresenter) {
    Object.assign(this, advice);
  }

  // Méthode statique pour transformer une entité d'avis en un format de présentation
  public static from(advice: AdviceModel): AdvicePresenter {
    return new AdvicePresenter({
      id: advice.id,
      bookId: advice.book.id,  // Utilisation de la relation ManyToOne
      creationDate: advice.creationDate,  // Formatage de la date
      comment: advice.comment,  // Commentaire de l'avis
      stars: advice.stars,  // Nombre d'étoiles
    });
  }
}
