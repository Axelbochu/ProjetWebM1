import { BookModel } from "../book/book.model";
import { BookId } from "../database/entities/book.entity";

export type AdviceModel = {
    id: string;
    stars:number;
    comment?:string;
    creationDate:Date;
    book: BookModel;
  }
  
  export type CreateAdviceModel = {
    stars:number;
    comment?:string;
    creationDate:Date;
    bookId: BookId;
  };
  