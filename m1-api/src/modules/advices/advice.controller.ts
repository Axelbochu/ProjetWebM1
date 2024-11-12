import { Body, Controller, Post } from '@nestjs/common';
import { NewAdviceDto } from './advice.dto';
import { AdvicePresenter } from './advice.presenter';
import { AdviceService } from './advice.service';

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
