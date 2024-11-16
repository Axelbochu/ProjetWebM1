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
