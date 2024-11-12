import { Injectable } from '@nestjs/common';
import { BookId } from '../database/entities/book.entity';
import { UpdateBookDto } from './book.dto';
import { BookModel, CreateBookModel } from './book.model';
import { BookRepository } from './book.reposiory';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async listBooks(): Promise<BookModel[]> {
    return this.bookRepository.listBooks();
  }

  public async getBook(id: BookId): Promise<BookModel | undefined> {
    return this.bookRepository.getBook(id);
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    return this.bookRepository.createBook(input);
  }

  public async searchBook(search: string): Promise<BookModel[]> {
    return this.bookRepository.searchBook(search);
  }

  //TODO: Implement the following methods
  public async updateBook(
    id: BookId,
    input: UpdateBookDto,
  ): Promise<BookModel> {
    return this.bookRepository.updateBook(id, input);
  }

  public async deleteBook(id: BookId): Promise<boolean> {
    return this.bookRepository.deleteBook(id);
  }
}
