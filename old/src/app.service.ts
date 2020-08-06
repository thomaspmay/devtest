import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService {
  private recipesService
  
  getHello(): string {
    return 'Hello World!';
  }
}
