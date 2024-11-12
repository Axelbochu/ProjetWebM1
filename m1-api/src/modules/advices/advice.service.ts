import { Injectable } from "@nestjs/common";
import { AdviceRepository } from "./advice.repository";
import { BookId } from "../database/entities/book.entity";
import { AdviceModel, CreateAdviceModel } from "./advice.model";

@Injectable()
export class AdviceService {
    constructor(private readonly adviceRepository: AdviceRepository) {}

    public async createAdvice(
        advice: CreateAdviceModel,
      ): Promise<AdviceModel> {
        return this.adviceRepository.createAdvice(advice);
      }
}