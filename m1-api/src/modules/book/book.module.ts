import { Module } from '@nestjs/common';
import { AdviceRepository } from '../advices/advice.repository';
import { AdviceService } from '../advices/advice.service';
import { BookController } from './book.controller';
import { BookRepository } from './book.reposiory';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService, BookRepository, AdviceRepository, AdviceService],
})
export class BookModule {}
