import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './modules/ConfigModule';

@Module({
  imports: [TypeOrmModule.forRoot(), ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
