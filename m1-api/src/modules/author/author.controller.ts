import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorPresenter } from './author.presenter';
import { AuthorService } from './author.service';
import { DetailsAuthorPresenter } from './detailsAuthor.presenter';

@Controller('Authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  public async listAuthor(): Promise<AuthorPresenter[]> {
    const authors = await this.authorService.listAuthors();

    return await Promise.all(
      authors.map(async (author) => {
        const books = await this.authorService.getAuthorBooks(author.id); //On récupère tout les livres
        const bookCount = books.length; //on les compte car c'est la valeur qui nous intéresse
        const averageRating = 0; //valeur temporaire

        return AuthorPresenter.from(author, bookCount, averageRating);
      }),
    );
  }

  @Post()
  public async createAuthor(
    @Body() input: CreateAuthorDto,
  ): Promise<AuthorPresenter> {
    const author = await this.authorService.createAuthor(input);

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
    const authors = await this.authorService.searchAuthor(search);

    return await Promise.all(
      authors.map(async (author) => {
        const books = await this.authorService.getAuthorBooks(author.id); //On récupère tout les livres
        const bookCount = books.length; //on les compte car c'est la valeur qui nous intéresse
        const averageRating = 0; //valeur temporaire

        return AuthorPresenter.from(author, bookCount, averageRating);
      }),
    );
  }

  @Patch(':id')
  public async updateAuthor(
    @Param('id') id: string,
    @Body() input: UpdateAuthorDto,
  ): Promise<AuthorPresenter> {
    const author = await this.authorService.updateAuthor(id, input);
    const books = await this.authorService.getAuthorBooks(author.id);
    const bookCount = books.length;
    const averageRating = 0; //tmp

    return AuthorPresenter.from(author, bookCount, averageRating);
  }

  @Delete(':id')
  public async deleteAuthor(@Param('id') id: string): Promise<boolean> {
    return this.authorService.deleteAuthor(id);
  }
}
