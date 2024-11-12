import { AuthorModel } from '../author/author.model';
import { BookId } from '../database/entities/book.entity';
import { BookModel } from './book.model';

export class BookPresenter {
  id: BookId;
  title: string;
  publishedYear: number;
  author: AuthorModel;
  averageRating: number | null;
  photoPath: string;
  price: number | null;

  private constructor(book: BookPresenter) {
    Object.assign(this, book);
  }

  public static from(
    book: BookModel,
    author: AuthorModel,
    averageRating: number | null,
  ): BookPresenter {
    return new BookPresenter({
      id: book.id,
      title: book.title,
      publishedYear: book.yearPublished,
      author: author,
      averageRating: averageRating,
      photoPath: book.picture,
      price: book.price,
    });
  }
}
