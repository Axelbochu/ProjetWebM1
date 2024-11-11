import { BookModel } from "../book/book.model";
import { AuthorModel } from "./author.model";

export class DetailsAuthorPresenter {
    id: string;
    firstName: string;
    lastName: string;
    biography?: string;
    photoPath?: string;
    books: BookModel[]; //en attendant la création du book presenter

  private constructor(author: DetailsAuthorPresenter) {
    Object.assign(this, author);
  }

  public static from(author: AuthorModel, books : BookModel[]): DetailsAuthorPresenter {
    return new DetailsAuthorPresenter({
        id: author.id,
        firstName: author.firstName,
        lastName: author.lastName,
        biography: author.biography,
        photoPath: author.photoPath,
        books: books,
    });
  }
}
