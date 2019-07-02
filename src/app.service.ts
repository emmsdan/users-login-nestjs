import { Injectable } from '@nestjs/common';
import { ConfigService } from './services/config.service';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return 'Hi, welocome to e-user-manager!';
  }
}
