import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateBookDto } from './createBook.dto';
import { UpdateBookDto } from './updateBook.dto';

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
  public async createBook(@Body() input: CreateBookDto): Promise<string> {
    return 'Book created ' + input.title;
  }

  @Patch(':id')
  public async updateBook(@Param('id') id: string, @Body() input: UpdateBookDto): Promise<string> {
    return 'Book updated ' + id + input.yearPublished;
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: string): Promise<string> {
    return 'Book deleted ' + id;
  }
}
