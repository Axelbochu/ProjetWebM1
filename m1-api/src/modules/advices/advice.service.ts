import { Injectable } from '@nestjs/common';
import { BookId } from '../database/entities/book.entity';
import { AdviceModel, CreateAdviceModel } from './advice.model';
import { AdviceRepository } from './advice.repository';

@Injectable()
export class AdviceService {
  constructor(private readonly adviceRepository: AdviceRepository) {}

  public async createAdvice(advice: CreateAdviceModel): Promise<AdviceModel> {
    return this.adviceRepository.createAdvice(advice);
  }

  public async listAdvicesForBook(bookId: BookId): Promise<AdviceModel[]> {
    return this.adviceRepository.listAdvicesForBook(bookId);
  }
}
