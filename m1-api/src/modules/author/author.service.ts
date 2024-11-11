import { Injectable } from '@nestjs/common';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { AuthorRepository } from './author.repository';
import { BookModel } from '../book/book.model';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.listAuthors();
  }

  public async getAuthorBooks(authorId: string): Promise<BookModel[]>{
    return this.authorRepository.getAuthorBooks(authorId);
  }

  public async createAuthor(input: CreateAuthorModel) : Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }

  public async getAuthorById(authorId: string) : Promise<AuthorModel | undefined>{
    return this.authorRepository.getAuthorById(authorId);
  }
}
