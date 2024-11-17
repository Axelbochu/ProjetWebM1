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
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorPresenter } from './author.presenter';
import { AuthorService } from './author.service';
import { DetailsAuthorPresenter } from './detailsAuthor.presenter';

@Controller('Authors')
export class AuthorController {
  constructor(
    private readonly authorService: AuthorService,
    private readonly adviceService: AdviceService,
  ) {}

  @Get()
  public async listAuthor(): Promise<AuthorPresenter[]> {
    const authors = await this.authorService.listAuthors();

    return await Promise.all(
      authors.map(async (author) => {
        const books = await this.authorService.getAuthorBooks(author.id); // On récupère tous les livres de l'auteur
        const bookCount = books.length; // On compte le nombre de livres de l'auteur

        let totalRating = 0;
        let totalBooksWithRating = 0;

        // On parcourt chaque livre pour récupérer les avis et calculer la moyenne
        for (const book of books) {
          const advices = await this.adviceService.listAdvicesForBook(book.id); // Récupère les avis du livre

          if (advices.length > 0) {
            const totalStars = advices.reduce(
              (sum, advice) => sum + advice.stars,
              0,
            );
            const averageRating = totalStars / advices.length;
            totalRating += averageRating; // On ajoute la note moyenne du livre à la somme totale
            totalBooksWithRating++; // On compte les livres ayant des avis
          }
        }

        // Si aucun livre n'a de note, on met la moyenne à 0, sinon on calcule la moyenne générale
        const averageRating =
          totalBooksWithRating > 0 ? totalRating / totalBooksWithRating : 0;

        return AuthorPresenter.from(author, bookCount, averageRating);
      }),
    );
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/authors', // Chemin où enregistrer les fichiers
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
  public async createAuthor(
    @Body() input: CreateAuthorDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<AuthorPresenter> {
    const photoPath = file ? file.path : null; // Récupérer le chemin du fichier s'il est fourni
    const author = await this.authorService.createAuthor({
      ...input,
      photoPath, // Inclure le chemin de l'image dans les données de l'auteur
    });

    return AuthorPresenter.from(author, 0, 0);
  }

  @Get(':id')
  public async getAuthor(
    @Param('id') id: string,
  ): Promise<DetailsAuthorPresenter> {
    console.log(id);
    const author = await this.authorService.getAuthorById(id);
    const books = await this.authorService.getAuthorBooks(id);

    return DetailsAuthorPresenter.from(author, books);
  }

  @Get('/getById/:search')
  public async searchAuthor(
    @Param('search') search: string,
  ): Promise<AuthorPresenter[]> {
    const authors = await this.authorService.searchAuthor(search); // Recherche des auteurs

    return await Promise.all(
      authors.map(async (author) => {
        const books = await this.authorService.getAuthorBooks(author.id); // On récupère tous les livres de l'auteur
        const bookCount = books.length; // On compte le nombre de livres

        let totalRating = 0;
        let totalBooksWithRating = 0;

        // On parcourt chaque livre pour récupérer les avis et calculer la moyenne
        for (const book of books) {
          const advices = await this.adviceService.listAdvicesForBook(book.id); // Récupère les avis du livre

          if (advices.length > 0) {
            const totalStars = advices.reduce(
              (sum, advice) => sum + advice.stars,
              0,
            );
            const averageRating = totalStars / advices.length;
            totalRating += averageRating; // On ajoute la note moyenne du livre à la somme totale
            totalBooksWithRating++; // On compte les livres ayant des avis
          }
        }

        // Si aucun livre n'a de note, on met la moyenne à 0, sinon on calcule la moyenne générale
        const averageRating =
          totalBooksWithRating > 0 ? totalRating / totalBooksWithRating : 0;

        return AuthorPresenter.from(author, bookCount, averageRating); // Retourne le presenter de l'auteur avec la moyenne des livres
      }),
    );
  }

  @Patch(':id')
  public async updateAuthor(
    @Param('id') id: string,
    @Body() input: UpdateAuthorDto,
  ): Promise<AuthorPresenter> {
    // Mise à jour de l'auteur
    const author = await this.authorService.updateAuthor(id, input);

    // Récupération des livres de l'auteur
    const books = await this.authorService.getAuthorBooks(author.id);

    // Calcul du nombre de livres
    const bookCount = books.length;

    // Variables pour calculer la moyenne des notes des livres
    let totalRating = 0;
    let totalBooksWithRating = 0;

    // Parcours des livres pour calculer la moyenne des avis
    for (const book of books) {
      const advices = await this.adviceService.listAdvicesForBook(book.id);

      if (advices.length > 0) {
        const totalStars = advices.reduce(
          (sum, advice) => sum + advice.stars,
          0,
        );
        const averageRating = totalStars / advices.length;
        totalRating += averageRating; // Ajouter la note moyenne du livre à la somme totale
        totalBooksWithRating++; // Compter les livres ayant des avis
      }
    }

    // Si un ou plusieurs livres ont des avis, on calcule la moyenne générale
    // Sinon, on met la moyenne à 0
    const averageRating =
      totalBooksWithRating > 0 ? totalRating / totalBooksWithRating : 0;

    // Retourner l'auteur mis à jour avec les informations de livre
    return AuthorPresenter.from(author, bookCount, averageRating);
  }

  @Delete(':id')
  public async deleteAuthor(@Param('id') id: string): Promise<boolean> {
    return this.authorService.deleteAuthor(id);
  }
}
