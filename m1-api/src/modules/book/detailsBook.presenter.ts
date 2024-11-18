import { AdviceModel } from '../advices/advice.model';
import { AuthorModel } from '../author/author.model';
import { BookId } from '../database/entities/book.entity';
import { BookModel } from './book.model';

export class DetailsBookPresenter {
  id: BookId;
  title: string;
  publishedYear: number;
  author: AuthorModel;
  price: number | null;
  photoPath?: string;
  advices: AdviceModel[];

  private constructor(book: DetailsBookPresenter) {
    Object.assign(this, book);
  }

  public static from(
    book: BookModel,
    author: AuthorModel,
    advices: AdviceModel[],
  ): DetailsBookPresenter {
    const baseURL = process.env.BASE_URL || 'http://localhost:3000/'; // URL de base de l'API
    console.log(`ok:${baseURL}`);
    return new DetailsBookPresenter({
      id: book.id,
      title: book.title,
      publishedYear: book.yearPublished,
      price: book.price,
      photoPath: book.picture ? `${baseURL}${book.picture}` : null,
      author: author,
      advices: advices,
    });
  }
} 