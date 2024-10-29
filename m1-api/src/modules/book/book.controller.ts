import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('books')
export class BookController {
  @Get()
  public async listBooks(): Promise<string> {
    return 'All books';
  }

  @Get(':id')
  public async getBook(@Param('id') id: string): Promise<string> {
    return 'A book ' + id;
  }

  @Post()
  public async createBook(): Promise<string> {
    return 'Book created';
  }

  @Patch(':id')
  public async updateBook(@Param('id') id: string): Promise<string> {
    return 'Book updated ' + id;
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: string): Promise<string> {
    return 'Book deleted ' + id;
  }
}
