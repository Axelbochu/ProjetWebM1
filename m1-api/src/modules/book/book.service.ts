import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto, NewAdviceDto } from './book.dto';
import { BookModel } from './book.model';
import { BookRepository } from './book.reposiory';

@Injectable()
export class BookService {

  constructor(private readonly bookRepository: BookRepository){}

  public async listBooks(): Promise<BookModel[]> {
    return this.bookRepository.listBooks();
  }

  public async getBook(id: string): Promise<string> {
    return 'A book ' + id;
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
