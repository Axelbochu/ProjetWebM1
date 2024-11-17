import { AuthorModel } from './author.model';

export class AuthorPresenter {
  id: string;
  firstName: string;
  lastName: string;
  photoPath?: string;
  bookCount: number;
  averageRating: number | null;

  private constructor(author: AuthorPresenter) {
    Object.assign(this, author);
  }

  public static from(
    author: AuthorModel,
    bookCount: number,
    averageRating: number | null,
  ): AuthorPresenter {
    const baseURL = process.env.BASE_URL || 'http://localhost:3000/'; // URL de base de l'API

    return new AuthorPresenter({
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      // Concatène l'URL complète si photoPath est défini
      photoPath: author.photoPath ? `${baseURL}${author.photoPath}` : null,
      bookCount: bookCount,
      averageRating: averageRating,
    });
  }
}
