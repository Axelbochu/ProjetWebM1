import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { DatabaseModule } from './modules/database/database.module';
import { AdviceModule } from './modules/advices/advice.module';

@Module({
  imports: [DatabaseModule, BookModule, AuthorModule, AdviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
