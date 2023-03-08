import { Module } from '@nestjs/common';
import { AdressSettingController } from './adress-setting.controller';
import { AdressSettingService } from './adress-setting.service';

@Module({
  controllers: [AdressSettingController],
  providers: [AdressSettingService]
})
export class AdressSettingModule {}
