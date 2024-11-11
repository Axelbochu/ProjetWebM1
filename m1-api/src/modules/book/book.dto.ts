import {
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Max(new Date().getFullYear(), {
    message:
      "L'année de publication ne peut pas être supérieure à l'année en cours.",
  })
  yearPublished: number;

  @IsString()
  authorId: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  picture?: string;
}

export class NewAdviceDto {
  @IsInt()
  @Max(5, { message: 'La note ne peut pas être supérieure à 5.' })
  @Min(1, { message: 'La note ne peut pas être inférieure à 1.' })
  stars: number;

  @IsString()
  @IsOptional()
  comment: string;

  @IsDate()
  createtionDate: Date;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title: string;

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
}
