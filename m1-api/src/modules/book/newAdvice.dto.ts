import { IsDate, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

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
