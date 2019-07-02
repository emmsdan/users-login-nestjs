import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let testingModule: TestingModule;
  let configService: ConfigService;

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    configService = testingModule.get(ConfigService);
  });

  describe('CONFIG: env', () => {
    it('should return ', async () => {
      const params = 'NODE_ENV';
      const environment = await configService.env(params);
      expect(environment).toBe('test');
    });
  });
});
