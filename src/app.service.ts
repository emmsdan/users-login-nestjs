import { Injectable } from '@nestjs/common';
import { ConfigService } from './services/ConfigService';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  getHello(): string {
    return 'Hi, welocome to e-user-manager';
  }
}
