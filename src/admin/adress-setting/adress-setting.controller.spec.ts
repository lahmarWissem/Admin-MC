import { Test, TestingModule } from '@nestjs/testing';
import { AdressSettingController } from './adress-setting.controller';

describe('AdressSettingController', () => {
  let controller: AdressSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdressSettingController],
    }).compile();

    controller = module.get<AdressSettingController>(AdressSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
