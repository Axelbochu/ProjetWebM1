import { Module } from '@nestjs/common';
import { AdviceRepository } from '../advices/advice.repository';
import { AdviceService } from '../advices/advice.service';
import { AuthorController } from './author.controller';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';

@Module({
  imports: [],
  controllers: [AuthorController],
  providers: [AuthorService, AuthorRepository, AdviceService, AdviceRepository],
})
export class AuthorModule {}
