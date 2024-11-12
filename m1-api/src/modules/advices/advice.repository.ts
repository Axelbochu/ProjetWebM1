import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AdviceEntity } from '../database/entities/advice.entity';
import { BookEntity, BookId } from '../database/entities/book.entity';
import { AdviceModel, CreateAdviceModel } from './advice.model';

@Injectable()
export class AdviceRepository {
  private readonly adviceRepository =
    this.dataSource.getRepository(AdviceEntity);
  private readonly bookRepository = this.dataSource.getRepository(BookEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async createAdvice(advice: CreateAdviceModel): Promise<AdviceModel> {
    const book = await this.bookRepository.findOneOrFail({
      where: { id: advice.bookId },
    });

    const newAdvice = this.adviceRepository.create({ ...advice, book });

    const savedAdvice = await this.adviceRepository.save(newAdvice);

    return savedAdvice;
  }

  public async listAdvicesForBook(bookId: BookId): Promise<AdviceModel[]> {
    const advices = await this.adviceRepository.find({
      where: { book: { id: bookId } },
    });

    return advices;
  }
}
