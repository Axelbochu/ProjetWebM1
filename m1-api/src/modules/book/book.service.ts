import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './createBook.dto';
import { UpdateBookDto } from './updateBook.dto';

@Injectable()
export class BookService {
  public async listBooks(): Promise<string> {
    return 'All books';
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

  public async createBookAdvice(id: string): Promise<string> {
    return 'Book advice created ' + id;
  }

  public async updateBook(id: string, input: UpdateBookDto): Promise<string> {
    return 'Book updated ' + id + input.yearPublished;
  }

  public async deleteBook(id: string): Promise<string> {
    return 'Book deleted ' + id;
  }
}
