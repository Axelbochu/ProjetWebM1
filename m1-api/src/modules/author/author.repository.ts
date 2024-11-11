import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BookModel } from '../book/book.model';
import { AuthorEntity } from '../database/entities/author.entity';
import { BookEntity } from '../database/entities/book.entity';
import { AuthorModel, CreateAuthorModel } from './author.model';

@Injectable()
export class AuthorRepository {
  private readonly authorRepository =
    this.dataSource.getRepository(AuthorEntity);
  private readonly bookRepository = this.dataSource.getRepository(BookEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }

  public async getAuthorBooks(authorId: string): Promise<BookModel[]> {
    const books = await this.bookRepository.find({
      where: { author: { id: authorId } },
      relations: { author: true },
    });

    return books;
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    const result = await this.authorRepository.save(
      this.authorRepository.create(input),
    );

    return result;
  }

  public async getAuthorById(id: string): Promise<AuthorModel | undefined> {
    const result = await this.authorRepository.findOneOrFail({
      where: { id: id },
    });

    return result;
  }
  public async searchAuthor(search: string): Promise<AuthorModel[]> {
    const authors = await this.authorRepository
      .createQueryBuilder('author')
      .where(
        `LOWER(author.firstName || ' ' || author.lastName) LIKE :search OR LOWER(author.lastName || ' ' || author.firstName) LIKE :search`,
        {
          search: `%${search.toLowerCase()}%`,
        },
      )
      .getMany();

    return authors;
  }
}
