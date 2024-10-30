import { IsInt, IsOptional, IsString, Max } from 'class-validator';

export class UpdateBookDto {
  
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsInt()
  @Max(new Date().getFullYear(), {message : "L'année de publication ne peut pas être supérieure à l'année en cours."})
  yearPublished: number;  

  @IsOptional()
  @IsString()
  authorId: string;
}
