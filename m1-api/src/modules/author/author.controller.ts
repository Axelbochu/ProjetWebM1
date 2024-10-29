import { Controller, Get } from '@nestjs/common';

@Controller('Authors')
export class AuthorController {
  @Get()
  public async listAuthor(): Promise<string> {
    return 'All Author';
  }
}
