import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BookEntity, BookId } from '../database/entities/book.entity';
import { BookModel } from './book.model';

@Injectable()
export class BookRepository {
  private readonly bookRepository = this.dataSource.getRepository(BookEntity);

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
}
