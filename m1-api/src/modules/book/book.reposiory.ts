import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { BookModel } from "./book.model";
import { BookEntity } from "../database/entities/book.entity";

@Injectable()
export class BookRepository{
    private readonly bookRepository = this.dataSource.getRepository(BookEntity);

    constructor(private readonly dataSource: DataSource) {}

    public async listBooks() : Promise<BookModel[]> {
        const books = await this.bookRepository.find({
            relations : {author : true},
        })

        return books;
    }
}