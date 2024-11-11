import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, UpdateBookDto, NewAdviceDto } from './book.dto';
import { BookId } from '../database/entities/book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks() {
    return this.bookService.listBooks();
  }

  @Get(':id')
  public async getBookById(@Param('id') id: BookId) {
    return this.bookService.getBook(id);
  }

  @Post()
  public async createBook(@Body() input: CreateBookDto): Promise<string> {
    return this.bookService.createBook(input);
  }

  @Get(':search')
  public async searchBook(@Param('search') search: string): Promise<string> {
    return this.bookService.searchBook(search);
  }

  @Post(':id/advices')
  public async createBookAdvice(
    @Param('id') id: string,
    @Body() advice: NewAdviceDto,
  ): Promise<string> {
    return this.bookService.createBookAdvice(id, advice);
  }

  @Patch(':id')
  public async updateBook(
    @Param('id') id: string,
    @Body() input: UpdateBookDto,
  ): Promise<string> {
    return this.bookService.updateBook(id, input);
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: string): Promise<string> {
    return this.bookService.deleteBook(id);
  }
}
