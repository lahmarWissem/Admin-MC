import { Test, TestingModule } from '@nestjs/testing';
import { AdressSettingService } from './adress-setting.service';

describe('AdressSettingService', () => {
  let service: AdressSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdressSettingService],
    }).compile();

    service = module.get<AdressSettingService>(AdressSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
