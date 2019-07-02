import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerService } from '@nest-modules/mailer';
import { ConfigService } from './services/config.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hi, welocome to e-user-manager!"', async () => {
      expect(appController).toBeDefined();
      expect(appController.getHello()).toBe('Hi, welocome to e-user-manager!');
    });
  });
});
