import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AdviceService } from '../advices/advice.service';
import { BookId } from '../database/entities/book.entity';
import { CreateBookDto, UpdateBookDto } from './book.dto';
import { BookPresenter } from './book.presenter';
import { BookService } from './book.service';
import { DetailsBookPresenter } from './detailsBook.presenter';

@Controller('books')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    private readonly adviceService: AdviceService,
  ) {}

  @Get()
  public async getBooks(): Promise<BookPresenter[]> {
    const books = await this.bookService.listBooks();

    return await Promise.all(
      books.map(async (book) => {
        const author = book.author;
        const advices = await this.adviceService.listAdvicesForBook(book.id);
        // Si aucun avis, retourner 0 (ou une valeur par défaut)
        if (advices.length === 0) {
          const averageRating = 0;
          return BookPresenter.from(book, author, averageRating);
        } else {
          // Calculer la moyenne des stars
          const totalStars = advices.reduce(
            (sum, advice) => sum + advice.stars,
            0,
          );
          const averageRating = totalStars / advices.length;
          return BookPresenter.from(book, author, averageRating);
        }
      }),
    );
  }

  @Get(':id')
  public async getBookById(
    @Param('id') id: BookId,
  ): Promise<DetailsBookPresenter> {
    const book = await this.bookService.getBook(id);
    const advices = await this.adviceService.listAdvicesForBook(id);

    return DetailsBookPresenter.from(book, book.author, advices);
  }
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/books', // Chemin où enregistrer les fichiers
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(
            null,
            `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`,
          );
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
    }),
  )
  public async createBook(
    @Body() input: CreateBookDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<BookPresenter> {
    const picture = file ? file.path : null; // Récupérer le chemin du fichier s'il est fourni
    console.log(input);
    console.log(picture);
    const book = await this.bookService.createBook({
      ...input,
      picture, // Inclure le chemin de l'image dans les données du livre
    });

    return BookPresenter.from(book, book.author, 0);
  }

  @Get('/searchBook/:search')
  public async searchBook(
    @Param('search') search: string,
  ): Promise<BookPresenter[]> {
    const books = await this.bookService.searchBook(search);

    return await Promise.all(
      books.map(async (book) => {
        const author = book.author;
        const advices = await this.adviceService.listAdvicesForBook(book.id);
        // Si aucun avis, retourner 0 (ou une valeur par défaut)
        if (advices.length === 0) {
          const averageRating = 0;
          return BookPresenter.from(book, author, averageRating);
        } else {
          // Calculer la moyenne des stars
          const totalStars = advices.reduce(
            (sum, advice) => sum + advice.stars,
            0,
          );
          const averageRating = totalStars / advices.length;
          return BookPresenter.from(book, author, averageRating);
        }
      }),
    );
  }

  @Patch(':id')
  public async updateBook(
    @Param('id') id: BookId,
    @Body() input: UpdateBookDto,
  ): Promise<BookPresenter> {
    const book = await this.bookService.updateBook(id, input);
    const author = book.author;
    const advices = await this.adviceService.listAdvicesForBook(book.id);
    // Si aucun avis, retourner 0 (ou une valeur par défaut)
    if (advices.length === 0) {
      const averageRating = 0;
      return BookPresenter.from(book, author, averageRating);
    } else {
      // Calculer la moyenne des stars
      const totalStars = advices.reduce((sum, advice) => sum + advice.stars, 0);
      const averageRating = totalStars / advices.length;
      return BookPresenter.from(book, author, averageRating);
    }
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: BookId): Promise<boolean> {
    return this.bookService.deleteBook(id);
  }
}
