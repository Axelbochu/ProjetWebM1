import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookId } from '../database/entities/book.entity';
import { CreateBookDto, NewAdviceDto, UpdateBookDto } from './book.dto';
import { BookPresenter } from './book.presenter';
import { BookService } from './book.service';
import { DetailsBookPresenter } from './detailsBook.presenter';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks(): Promise<BookPresenter[]> {
    const books = await this.bookService.listBooks();

    return await Promise.all(
      books.map(async (book) => {
        const author = book.author;
        const averageRating = 0; //valeur temporaire

        return BookPresenter.from(book, author, averageRating);
      }),
    );
  }

  //TODO : nouveau presenter
  @Get(':id')
  public async getBookById(
    @Param('id') id: BookId,
  ): Promise<DetailsBookPresenter> {
    const book = await this.bookService.getBook(id);
    console.log(book);

    return DetailsBookPresenter.from(book, book.author);
  }

  @Post()
  public async createBook(
    @Body() input: CreateBookDto,
  ): Promise<DetailsBookPresenter> {
    const book = await this.bookService.createBook(input);

    return DetailsBookPresenter.from(book, book.author);
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
