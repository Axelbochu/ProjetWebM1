import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { AuthorModel } from './author.model';

@Injectable()
export class AuthorRepository {
  private readonly authorRepository =
    this.dataSource.getRepository(AuthorEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }
}
