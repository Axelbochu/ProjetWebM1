import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, Max } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @Transform(({ value }) => parseInt(value, 10)) // Convertit automatiquement en nombre
  @IsInt()
  @Max(new Date().getFullYear(), {
    message:
      "L'année de publication ne peut pas être supérieure à l'année en cours.",
  })
  yearPublished: number;

  @IsString()
  authorId: string;

  @Transform(({ value }) => (value ? parseFloat(value) : undefined)) // Gestion optionnelle des nombres
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  picture?: string;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title: string;
  
  @Transform(({ value }) => parseInt(value, 10)) // Convertit automatiquement en nombre
  @IsOptional()
  @IsInt()
  @Max(new Date().getFullYear(), {
    message:
      "L'année de publication ne peut pas être supérieure à l'année en cours.",
  })
  yearPublished: number;

  @IsOptional()
  @IsString()
  authorId: string;

  @Transform(({ value }) => (value ? parseFloat(value) : undefined)) // Gestion optionnelle des nombres
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  picture?: string;
}
