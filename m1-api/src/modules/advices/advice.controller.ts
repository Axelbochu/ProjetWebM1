import { Body, Controller, Param, Post } from "@nestjs/common";
import { AdviceService } from "./advice.service";
import { BookId } from "../database/entities/book.entity";
import { NewAdviceDto } from "./advice.dto";
import { AdvicePresenter } from "./advice.presenter";

@Controller('advices')
export class AdviceController {
    constructor(private readonly adviceService: AdviceService) {}

    @Post()
    public async createBookAdvice(
        @Body() advice: NewAdviceDto,
    ): Promise<AdvicePresenter> {

        const adviceResult = await this.adviceService.createAdvice(advice);

        return AdvicePresenter.from(adviceResult);
    }
}