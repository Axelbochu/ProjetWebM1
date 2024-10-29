import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';

@Module({
  imports: [],
  controllers: [AuthorController],
  providers: [],
})
export class AuthorModule {}
