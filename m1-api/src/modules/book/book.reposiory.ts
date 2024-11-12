import { Injectable } from '@nestjs/common';
import { DataSource, ILike } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { BookEntity, BookId } from '../database/entities/book.entity';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';

@Injectable()
export class BookRepository {
  private readonly bookRepository = this.dataSource.getRepository(BookEntity);
  private readonly authorRepository =
    this.dataSource.getRepository(AuthorEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async listBooks(): Promise<BookModel[]> {
    const books = await this.bookRepository.find({
      relations: { author: true },
    });

    return books;
  }

  public async getBook(id: BookId): Promise<BookModel | undefined> {
    const book = await this.bookRepository.findOneOrFail({
      where: { id },
      relations: { author: true },
    });

    return book;
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    const author = await this.authorRepository.findOneOrFail({
      where: { id: input.authorId },
    });

    const book = this.bookRepository.create({ ...input, author });

    const savedBook = await this.bookRepository.save(book);

    return savedBook;
  }

  public async searchBook(search: string): Promise<BookModel[]> {
    const books = await this.bookRepository.find({
      where: {
        title: ILike(`${search}%`), // Le titre doit commencer par la chaîne de recherche
      },
    });

    return books;
  }

  public async updateBook(
    id: BookId,
    input: UpdateBookModel,
  ): Promise<BookModel> {
    const book = await this.bookRepository.findOneOrFail({
      where: { id: id },
      relations: { author: true },
    });

    console.log(book);

    const updatedBook = await this.bookRepository.save({
      ...book,
      ...input,
    });

    return updatedBook;
  }

  public async deleteBook(id: BookId): Promise<boolean> {
    const book = await this.bookRepository.findOneOrFail({
      where: { id },
    });

    await this.bookRepository.remove(book);

    return true;
  }
}
