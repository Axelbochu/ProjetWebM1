import { AuthorModel } from '../author/author.model';
import { BookId } from '../database/entities/book.entity';
import { BookModel } from './book.model';

// TODO : avis à implémenter
export class DetailsBookPresenter {
  id: BookId;
  title: string;
  publishedYear: number;
  author: AuthorModel;
  price: number | null;
  photoPath: string | null;

  private constructor(book: DetailsBookPresenter) {
    Object.assign(this, book);
  }

  public static from(
    book: BookModel,
    author: AuthorModel,
  ): DetailsBookPresenter {
    return new DetailsBookPresenter({
      id: book.id,
      title: book.title,
      publishedYear: book.yearPublished,
      price: book.price,
      photoPath: book.picture,
      author: author,
    });
  }
}
