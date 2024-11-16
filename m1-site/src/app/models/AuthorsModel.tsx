import { BookModel } from "./BookModel";

export type AuthorModel = {
    id: string
    firstName: string;
    lastName: string;
    biography: string;
    bookCount: number;
    averageRating: number;
    authorImage: string;
    books: BookModel[];
}

export interface Author_data {
    coverImage: string;
    author_name: string;
    biographie: string;
    hauteur: string;
    largeur: string;
  }
