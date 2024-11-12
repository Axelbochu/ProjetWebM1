import { Injectable } from '@nestjs/common';
import { BookModel } from '../book/book.model';
import {
  AuthorModel,
  CreateAuthorModel,
  UpdateAuthorModel,
} from './author.model';
import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.listAuthors();
  }

  public async getAuthorBooks(authorId: string): Promise<BookModel[]> {
    return this.authorRepository.getAuthorBooks(authorId);
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }

  public async getAuthorById(
    authorId: string,
  ): Promise<AuthorModel | undefined> {
    return this.authorRepository.getAuthorById(authorId);
  }

  public async searchAuthor(search: string): Promise<AuthorModel[]> {
    return this.authorRepository.searchAuthor(search);
  }

  public async updateAuthor(
    id: string,
    input: UpdateAuthorModel,
  ): Promise<AuthorModel> {
    return this.authorRepository.updateAuthor(id, input);
  }

  public async deleteAuthor(id: string): Promise<boolean> {
    return this.authorRepository.deleteAuthor(id);
  }
}
