import { IsInt,Max,Min,IsString,IsOptional, IsUUID, IsDateString } from "class-validator";
import { BookId } from "../database/entities/book.entity";

export class NewAdviceDto {
    @IsInt()
    @Max(5, { message: 'La note ne peut pas être supérieure à 5.' })
    @Min(1, { message: 'La note ne peut pas être inférieure à 1.' })
    stars: number;
  
    @IsString()
    @IsOptional()
    comment: string;
  
    @IsDateString()
    creationDate: Date;

    @IsUUID()
    bookId: BookId;
  }