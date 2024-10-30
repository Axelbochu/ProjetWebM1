import { IsInt, IsString, Max } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Max(new Date().getFullYear(), {message : "L'année de publication ne peut pas être supérieure à l'année en cours."})
  yearPublished: number;  

  @IsString()
  authorId: string;
}
