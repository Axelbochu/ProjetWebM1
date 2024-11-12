import { BookId } from '../database/entities/book.entity';

export type BookModel = {
  id: BookId;
  title: string;
  yearPublished: number;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    biography?: string;
    photoPath?: string;
  };
  price?: number;
  picture?: string;
};

export type CreateBookModel = {
  title: string;
  yearPublished: number;
  authorId: string;
  price?: number;
  picture?: string;
};

export type UpdateBookModel = {
  title?: string;
  yearPublished?: number;
  authorId?: string;
  price?: number;
  picture?: string;
};
