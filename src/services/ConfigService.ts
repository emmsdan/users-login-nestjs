import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = process.env;
  }

  env(key: string): string {
    return this.envConfig[key];
  }
}
