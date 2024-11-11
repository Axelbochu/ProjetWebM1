import { Injectable } from '@nestjs/common';
import { CreateBookDto, NewAdviceDto, UpdateBookDto } from './book.dto';
import { BookModel } from './book.model';
import { BookRepository } from './book.reposiory';
import { BookId } from '../database/entities/book.entity';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async listBooks(): Promise<BookModel[]> {
    return this.bookRepository.listBooks();
  }

  public async getBook(id: BookId): Promise<BookModel | undefined> {
    return this.bookRepository.getBook(id);
  }

  public async createBook(input: CreateBookDto): Promise<string> {
    return 'Book created ' + input.title;
  }

  public async searchBook(search: string): Promise<string> {
    return 'Search book ' + search;
  }

  public async createBookAdvice(
    id: string,
    advice: NewAdviceDto,
  ): Promise<string> {
    return 'Book advice created ' + id + advice.stars;
  }

  public async updateBook(id: string, input: UpdateBookDto): Promise<string> {
    return 'Book updated ' + id + input.yearPublished;
  }

  public async deleteBook(id: string): Promise<string> {
    return 'Book deleted ' + id;
  }
}
