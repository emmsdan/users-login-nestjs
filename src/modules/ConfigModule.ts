import { Module } from '@nestjs/common';
import { ConfigService } from '../services/ConfigService';

const environment = 'production';
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `./.env.${process.env.NODE_ENV || environment}`,
      ),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
