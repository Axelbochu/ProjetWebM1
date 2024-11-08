import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('Authors')
export class AuthorController {
  @Get()
  public async listAuthor(): Promise<string> {
    return 'All Author';
  }

  @Post()
  public async updateAthor(): Promise<string> {
    return 'Author updated';
  }

  @Get(':id')
  public async getAuthor(): Promise<string> {
    return 'A Author';
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
