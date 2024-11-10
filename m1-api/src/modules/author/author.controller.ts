import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AuthorPresenter } from './author.presenter';
import { AuthorService } from './author.service';

@Controller('Authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  public async listAuthor(): Promise<AuthorPresenter[]> {
    const authors = await this.authorService.listAuthors();

    return authors.map(AuthorPresenter.from);
  }

  @Post()
  public async updateAthor(): Promise<string> {
    return 'Author updated';
  }

  @Get(':id')
  public async getAuthor(): Promise<string> {
    return 'A Author';
  }

  @Get(':search')
  public async searchAuthor(): Promise<string> {
    return 'Search Author';
  }

  @Get(':id/books')
  public async getAuthorBooks(): Promise<string> {
    return 'Author books';
  }

  @Patch(':id')
  public async updateAuthor(): Promise<string> {
    return 'Author updated';
  }

  @Delete(':id')
  public async deleteAuthor(): Promise<string> {
    return 'Author deleted';
  }
}
