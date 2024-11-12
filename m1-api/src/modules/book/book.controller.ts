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
import { CreateBookDto, UpdateBookDto } from './book.dto';
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

  @Get('/searchBook/:search')
  public async searchBook(
    @Param('search') search: string,
  ): Promise<BookPresenter[]> {
    const books = await this.bookService.searchBook(search);

    return await Promise.all(
      books.map(async (book) => {
        const author = book.author;
        const averageRating = 0; //valeur temporaire

        return BookPresenter.from(book, author, averageRating);
      }),
    );
  }

  @Patch(':id')
  public async updateBook(
    @Param('id') id: BookId,
    @Body() input: UpdateBookDto,
  ): Promise<BookPresenter> {
    const book = await this.bookService.updateBook(id, input);
    const averageRating = 0; //valeur temporaire

    return BookPresenter.from(book, book.author, averageRating);
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: BookId): Promise<boolean> {
    return this.bookService.deleteBook(id);
  }
}
