import { AuthorModel } from "./author.model";

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

  public static from(author: AuthorModel, bookCount: number, averageRating: number | null): AuthorPresenter {
    return new AuthorPresenter({
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      photoPath: author.photoPath,
      bookCount: bookCount,
      averageRating: averageRating,
    });
  }
}
